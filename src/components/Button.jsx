import React from 'react'

function Button(props) {
  return (
    <div className='w-full'>
         <button className='px-6 py-2 border rounded-xl w-full mx-auto text-xl'>{props.text}</button>
    </div>
  )
}

export default Button