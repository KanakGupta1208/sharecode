import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Homevideo = () => {
    const [roomID,setRoomID] = useState();
    const navigate = useNavigate();  
    const handleJoin =()=>
    {
        navigate(`/room/${roomID}`)
        
    }

  return (
    <div>

        <input placeholder='Enter rom id' type='text' value={roomID} onChange={(e)=>setRoomID(e.target.value)}></input>


        <button onClick={handleJoin}>Join</button>


    </div>
  )
}

export default Homevideo