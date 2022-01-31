import React, { useEffect, useState } from 'react'
import * as Styles from './styles'
import ThumbUpIcon from '@mui/icons-material/ThumbUp'
import Image from 'next/image'
import DefaultImage from './../../../public/assets/default-image.jpg'

export default function FeedPost({ posts, removePost, timeout, setTimeout, likes, setLikes }) {
  useEffect(() => {
    const interval = setInterval(() => {
      if (posts.length > 0) {
        const newTime = {}
        posts.forEach(async (post) => {
          const currentTime = timeout[post.id]
          newTime[post.id] = currentTime - 1
          if (newTime[post.id] === 0) {
            await removePost(post.id)
          }
        })
        setTimeout(newTime)
      }
    }, 1000)
    return () => clearInterval(interval)
  })

  async function updateLike(postId) {
    const newTimer = timeout
    const currentTime = timeout[postId]

    newTimer[postId] = currentTime + 30
    setTimeout(newTimer)

    const currentLikes = likes[postId] || 0
    const newLikes = likes
    newLikes[postId] = currentLikes + 1

    setLikes(newLikes)
  }

  return (
    <Styles.Container>
      {!!posts.length > 0 &&
        posts.map((post, index) => (
          <Styles.Card key={index}>
            <Styles.Content>{post.content}</Styles.Content>
            {<Image width="400" height="400" src={post.media || DefaultImage} type="image/png" alt="Image" />}
            <Styles.Footer>
              <Styles.Timeout>{timeout[post.id]}</Styles.Timeout>
              <Styles.LikeCounter>{likes[post.id]}</Styles.LikeCounter>
              <ThumbUpIcon
                color="primary"
                style={{
                  color: 'white',
                  cursor: 'pointer'
                }}
                value={likes[post.id]}
                onClick={(event) => updateLike(post.id)}
              />
            </Styles.Footer>
          </Styles.Card>
        ))}
    </Styles.Container>
  )
}
