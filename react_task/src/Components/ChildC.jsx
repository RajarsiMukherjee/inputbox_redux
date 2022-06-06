import React from 'react'
import { useSelector } from 'react-redux'


const ChildC = () => {
  const inputText = useSelector((Store) => Store.text_input)

  return (
    <div>
      <p>{inputText}</p>
    </div>
  )
}

export default ChildC
