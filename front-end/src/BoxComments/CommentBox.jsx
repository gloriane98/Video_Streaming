import React from 'react'
import CommentForm from './CommentForm'
import Comments from './Comments';
import "./styles.css";
export default function CommentBox() {
  return (
    <div>
      <Comments
        commentsUrl="http://localhost:4500/comments"
        currentUserId="1"
      />
      {/* <CommentForm/> */}
    </div>
  )
}
