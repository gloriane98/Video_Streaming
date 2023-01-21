import socketIO from 'socket.io-client'
import React from 'react'
import { useState, useEffect } from 'react'
import CommentForm from './CommentForm'
import Comment from './Comment'
import axios from 'axios'
import { Avatar } from '@mui/material'
import { useParams } from 'react-router-dom'

const socket = socketIO.connect('http://localhost:9000')
const Comments = ({ currentUserId, videoId }) => {
   // const {videoId}=useParams()
   const [backendComments, setBackendComments] = useState([])
   const [activeComment, setActiveComment] = useState(null)

   const rootComments = backendComments
      .filter(
         (backendComment) =>
            backendComment.parentComment === null &&
            backendComment.videoId === videoId
      )
      .sort(
         (a, b) =>
            new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      )

   const getReplies = (commentId) => {
      return backendComments
         .filter(
            (backendComment) =>
               backendComment.parentComment === commentId &&
               backendComment.videoId === videoId
         )
         .sort(
            (a, b) =>
               new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
         )
   }

   const getComments = () => {
      socket.emit('getComments', {})
   }

   useEffect(() => {
      getComments()
      socket.on('receiveComments', (comment) => {
         setBackendComments(comment)
      })
      socket.on('commentResponse', (comment) =>
         setBackendComments([comment, ...backendComments])
      )
   }, [videoId, socket, backendComments])


   const addComment = (text, parentComment) => {
      console.log('addComment', text, parentComment)
      socket.emit('commentSend', {
         message: text,
         videoId: videoId,
         userId: localStorage.getItem('userId'),
         userName: localStorage.getItem('userName'),
         userImage: localStorage.getItem('userImage'),
         parentComment: parentComment,
         // socketID: socket.id,
      })
      setActiveComment(null)

      if (parentComment !== null) {
         socket.emit('notificationSend', {
            description: ' has replied to your comment there is ',
            commentId: backendComments[1]._id,
            userIdSender: localStorage.getItem('userId'),
            userIdSenderName: localStorage.getItem('userName'),
            userIdSenderImage: localStorage.getItem('userImage'),
            userIdReceiver: backendComments[1].userId,
         })
      }
   }

   return (
      <div>
         <div className="comment-part">
            <div className="comments">
               {
                  backendComments.filter(
                     (backendComment) => backendComment.videoId === videoId
                  ).length
               }
               {' Comments'}
            </div>
            <div className="filter">
               <i className="fa-solid fa-filter"></i> {'Filter comments'}
            </div>
         </div>
         <div className="comment-edit">
            <div>
               <Avatar
                  src={localStorage.getItem('userImage')}
                  alt={localStorage.getItem('userName')}
                  className="profile-picture"
               />
            </div>
            <CommentForm submitLabel="Send Comment" handleSubmit={addComment} />
         </div>
         {rootComments.map((rootComment) => (
            <Comment
               key={rootComment._id}
               comment={rootComment}
               replies={getReplies(rootComment._id)}
               currentUserId={currentUserId}
               activeComment={activeComment}
               setActiveComment={setActiveComment}
               addComment={addComment}
               videoId={videoId}
            />
         ))}
      </div>
   )
}

export default Comments