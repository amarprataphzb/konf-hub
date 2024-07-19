import React from 'react'

 import Navbar from './Navbar'
import Sidebar from './Sidebar'
const MainPage = (props) => {
 const data=props.data

  return (
    <div style={{display:'flex',margin:"20px"}}>
        {/* <p>{JSON.stringify(fetchingData)}</p> */}
        <div>
            <div>
                <img src= {data?.event_poster_url} alt='pic not found'/>
        
            </div>
            <div>
                <Navbar data={data}/>

            </div>
            
        </div>
        <div style={{width:"25%"}}>
            <Sidebar data={data}/>
        </div>
    </div>
  )
}

export default MainPage