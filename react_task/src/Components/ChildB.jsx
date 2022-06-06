import React, { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { addInputText } from '../Redux/Action';

const ChildB = () => {
    const [textin , setTextin] = useState("");
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(addInputText(textin))
    },[textin])
  return (
    <div>
      
    <input type="text"  onChange={(e) => setTextin(e.target.value)}/>

    </div>
  )
}

export default ChildB
