import React, { useState } from 'react'
import * as Styles from './styles'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate'

export default function FeedPublish({ publishPost }) {
  const [content, setContent] = useState('')
  const [media, setMedia] = useState('')

  async function onPublishPost() {
    if (content.trim().length === 0 && !media) {
      return alert('Invalid post')
    }
    const mediaContent = media ? URL.createObjectURL(media) : ''
    await publishPost({
      content,
      media: mediaContent
    })

    setContent('')
    setMedia('')
  }
  return (
    <Styles.Container>
      <Styles.SearchInput>
        <TextField
          multiline={true}
          fullWidth={true}
          placeholder="Type here..."
          size="small"
          style={{ width: 500, height: 30 }}
          variant="outlined"
          value={content}
          onChange={(event) => setContent(event.target.value)}
          maxRows={2}
        />
        <label htmlFor="image-input" style={{ cursor: 'pointer' }}>
          <AddPhotoAlternateIcon />
          <input
            style={{ display: 'none' }}
            id="image-input"
            type="file"
            accept="image/*"
            name="myImage"
            onChange={(event) => {
              setMedia(event.target.files[0])
            }}
            onClick={(e) => {
              e.target.value = null
            }}
          />
        </label>
        <Button size="large" variant="contained" onClick={() => onPublishPost()}>
          Publish
        </Button>
      </Styles.SearchInput>
    </Styles.Container>
  )
}
