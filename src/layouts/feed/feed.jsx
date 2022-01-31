import React, { useContext } from 'react'

import FeedContent from '../../components/FeedContent'
import * as Styles from './styles'
import { FeedContext } from './context'
export default function Feed() {
  const { posts, setPosts, publishPost, removePost, setTimeout, timeout, likes, setLikes } = useContext(FeedContext)
  return (
    <Styles.Container>
      <FeedContent
        posts={posts}
        setPosts={setPosts}
        publishPost={publishPost}
        removePost={removePost}
        setTimeout={setTimeout}
        timeout={timeout}
        likes={likes}
        setLikes={setLikes}
      />
    </Styles.Container>
  )
}
