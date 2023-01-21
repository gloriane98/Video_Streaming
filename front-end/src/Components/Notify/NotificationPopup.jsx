import socketIO from 'socket.io-client'
import React, { useEffect } from 'react'
import { useState } from 'react'
import Message from './Message'
import { HashLink } from 'react-router-hash-link'

const socket = socketIO.connect('http://localhost:9000')
const NotificationPopup = ({ showPopUp, notifications }) => {
   const [notificationRows, setNotificationRows] = useState([])
   const Rings = notificationRows.filter(
      (notification) =>
         notification.userIdReceiver === localStorage.getItem('userId')
   )

   const getNotifications = () => {
      socket.emit('getNotifications', {})
   }

   useEffect(() => {
      getNotifications()
      socket.on('receiveNotifications', (notification) => {
         setNotificationRows(notification)
      })
      socket.on('notificationResponse', (notification) =>
         setNotificationRows([notification, ...notifications])
      )
   }, [socket, notifications])

   // console.log('popup : ', Rings)

   return (
      <div className="popup-container">
         <div className="overlay" onClick={showPopUp}></div>
         <div className="popup-head">
            <h1>Notifications</h1>
            <h1 onClick={showPopUp}>
               <i className="fa-solid fa-circle-xmark close-button"></i>
            </h1>
         </div>
         {Rings.map((notification) => {
            return (
               <HashLink
                  onClick={showPopUp}
                  key={notification._id}
                  to={`/videoplay/#${notification.commentId}`}
                  className="hashlink"
               >
                  <Message notification={notification} />
               </HashLink>
            )
         })}
      </div>
   )
}

export default NotificationPopup