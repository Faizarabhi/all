import React from 'react'
import { Link } from 'react-router-dom'

function ButtonSquare({text,style}) {
  return (
    <Link to="/login">
      <button className={`bg-primary border-2 border-primary hover:bg-primary  hover:text-white rounded-sm p-2 px-8 w-fit ${style}`}>{text}</button>
    </Link>
  )
}

export default ButtonSquare