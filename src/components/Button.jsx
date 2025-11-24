import React from 'react'

function Button(props) {
  return (
    <div className='w-full'>
         <button className='px-6 py-2 border rounded-xl w-full mx-auto text-[.8rem] font-medium font-400'>{props.text}</button>
    </div>
  )
}

export default Button