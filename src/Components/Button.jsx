import React from 'react'

const Button = (props) => {
  return (
    <div className='bg-blue-500 rounded-full py-3 px-5 text-white'>
      <button>{props.text}</button>
    </div>
  )
}

export default Button