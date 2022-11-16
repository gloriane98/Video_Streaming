import React from 'react'



const UserImage = () => {
let userImg=window.localStorage.getItem('image')

  return (
    <div >
    <img src={userImg} alt="user" className='avatar-user' />
  </div>
  )
}

export default UserImage





