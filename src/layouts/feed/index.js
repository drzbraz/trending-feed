import React, { useEffect, useState } from 'react'
import FeedLayout from './feed'
import { CombineProviders } from './context'
import { api } from '../../services/api'
export default function Feed() {
  const [posts, setPosts] = useState([])
  const [timeout, setTimeout] = useState({})
  const [likes, setLikes] = useState({})

  useEffect(() => {
    getPosts()
  }, [])

  async function publishPost(body) {
    await api.post('/posts', body)
    await getPosts()
  }

  async function removePost(postId) {
    await api.delete('/posts/' + postId)
    const removePostId = posts.filter((post) => post.id !== postId)
    setPosts(removePostId)
  }

  async function getPosts() {
    const response = await api.get('/posts')
    const newPosts = response.data.sort((a, b) => b.id - a.id)

    updateTimeoutAndLikes(newPosts)
    setPosts(newPosts)
  }

  function updateTimeoutAndLikes(newPosts) {
    if (newPosts.length > 0) {
      const timeoutUpdated = timeout
      const likesUpdated = likes

      newPosts.forEach((post) => {
        if (!!timeoutUpdated[post.id]) {
          timeoutUpdated[post.id] = timeoutUpdated[post.id]
        } else {
          timeoutUpdated[post.id] = 60
        }

        if (!!likesUpdated[post.id]) {
          likesUpdated[post.id] = likesUpdated[post.id]
        } else {
          likesUpdated[post.id] = 0
        }
      })
      setTimeout(timeoutUpdated)
      setLikes(likesUpdated)
    }
  }

  return (
    <CombineProviders feedContent={{ posts, setPosts, publishPost, removePost, setTimeout, timeout, likes, setLikes }}>
      <FeedLayout />
    </CombineProviders>
  )
}
