import React from 'react'
import './Dashboard.css'
import Navbar from '../Navbar'
import Sidebar from '../Sidebar'
import AppCenter from '../AppCenter'
import VideoPop from '../VideoPop'


const Dashboard = () => {
  return (
    <div className='detailscontainer'>
     <Navbar/>
      <Sidebar/>
      <VideoPop/>
      <AppCenter/>
  
    </div>
  )
}

export default Dashboard

/*  <Routes>
   <Route path='/home' element={<AppCenter/>}>
              <Route path='home/pop' element={<VideoPop/>}/>
              <Route path='like' element={<VideoLikes/>}/>
              <Route path='subcribe' element={<SubcribeVideo/>}/>
              <Route path='listvideochannel/:channelId' element={<ListVideoChannel/>}/>
              <Route path='videoview/:videoId' element={<Videoview/>}/>
   </Route>
   </Routes> 
    <AppCenter/>*/