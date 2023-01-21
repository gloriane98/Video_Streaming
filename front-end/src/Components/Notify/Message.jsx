import socketIO from 'socket.io-client'
import React from 'react'
import moment from 'moment/moment'

const socket = socketIO.connect('http://localhost:9000')
const Message = ({ notification }) => {
   // console.log('popup : ', notification)

   return (
      <div>
         <hr />
         <div className="popup-list">
            <div className="popup-msg-img">
               <img
                  src={notification.userIdSenderImage}
                  alt="image"
                  className="popup-user-icon"
               />
            </div>
            <div className="popup-msg">
               <div className="popup-msg-text">
                  {notification.userIdSenderName}
                  {notification.description}
               </div>
               <div className="popup-msg-time">
                  {moment(notification.createdAt).fromNow()}
               </div>
            </div>
         </div>
      </div>
   )
}

export default Message