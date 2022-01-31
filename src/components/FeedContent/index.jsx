import * as Styles from './styles'
import FeedPublish from '../FeedPublish'
import FeedPost from '../FeedPost'

export default function FeedContent({
  posts,
  setPosts,
  publishPost,
  removePost,
  setTimeout,
  timeout,
  likes,
  setLikes
}) {
  return (
    <Styles.Container>
      <FeedPublish posts={posts} setPosts={setPosts} publishPost={publishPost} />
      <FeedPost
        posts={posts}
        setPosts={setPosts}
        removePost={removePost}
        setTimeout={setTimeout}
        timeout={timeout}
        likes={likes}
        setLikes={setLikes}
      />
    </Styles.Container>
  )
}
