import React from 'react'
import Youtube from 'react-youtube'

const IframeVideo = ({videoId}) => {
  return (
    <div>
      <Youtube width={750} videoId={videoId}/>
    </div>
  )
}

export default IframeVideo
