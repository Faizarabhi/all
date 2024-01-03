import React from 'react'
import { Link } from 'react-router-dom'

function ButtonBorder({text}) {
  return (
    <Link to="/login">
      <button className='bg-white border-2 border-primary hover:bg-primary hover:border-white hover:text-white rounded-full p-2 px-12'>{text}</button>
    </Link>
  )
}

export default ButtonBorder