import socketIO from 'socket.io-client'
import React, { useState, useEffect } from 'react'

const socket = socketIO.connect('http://localhost:9000')
const Dislike = ({ comment }) => {
   const [dislikeCounts, setDislikeCounts] = useState([])

   const Dislikes = dislikeCounts.filter(
      (dislike) => dislike.commentId === comment._id
   )

   const getDislikes = () => {
      socket.emit('getDislikes', {})
   }

   useEffect(() => {
      getDislikes()
      socket.on('receiveDislikes', (dislike) => {
         setDislikeCounts(dislike)
      })
      socket.on('dislikeResponse', (dislike) =>
         setDislikeCounts([dislike, ...dislikeCounts])
      )
   }, [socket, dislikeCounts])

   const addDislike = () => {
      socket.emit('dislikeSend', {
         commentId: comment._id,
         userId: localStorage.getItem('userId'),
      })

      /* socket.emit('dislikeDeleted', {
         _id: comment._id,
      }) */
   }
   return (
      <div>
         <i className="fa-solid fa-thumbs-down" onClick={addDislike}></i>
         <span> {Dislikes.length} </span>
      </div>
   )
}

export default Dislike