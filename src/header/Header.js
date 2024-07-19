import React from 'react'
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
 

const Header = (props) => {
console.log("line6",props.data)
  return (
    <div style={{display:'flex',justifyContent:'space-between', margin:"1rem"}}>
        <div>

            <img src={props.data?.navbar_icon} width={100} height={50}/>
        </div>
        <div>
            <Person2OutlinedIcon/>
        </div>
    </div>
  )
}

export default Header