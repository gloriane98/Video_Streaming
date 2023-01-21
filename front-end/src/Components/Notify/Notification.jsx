import socketIO from 'socket.io-client'
import React, { useEffect, useState } from 'react'
import NotificationPopup from './NotificationPopup'

const socket = socketIO.connect('http://localhost:9000')
const Notification = () => {
   const [modal, setModal] = useState(false)
   const [notifications, setNotifications] = useState([])
   const Rings = notifications.filter(
      (notification) =>
         notification.userIdReceiver === localStorage.getItem('userId')
   )

   const showPopUp = () => {
      setModal(!modal)
   }

   const getNotifications = () => {
      socket.emit('getNotifications', {})
   }
   // console.log('notifications : ', notifications)

   useEffect(() => {
      getNotifications()
      socket.on('receiveNotifications', (notification) => {
         setNotifications(notification)
      })
      socket.on('notificationResponse', (notification) =>
         setNotifications([notification, ...notifications])
      )
   }, [socket, notifications])

   return (
      <>
         <div className="notification" onClick={showPopUp}>
            <i className="fa-solid fa-bell fa-comment" onClick={showPopUp}></i>
            <span className="counter">{Rings.length}</span>
         </div>
         {modal &&
            notifications.map(() => {
               return <NotificationPopup showPopUp={showPopUp} />
            })}
      </>
   )
}

export default Notification