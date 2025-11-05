import React from 'react'

function Button(props) {
  return (
    <div>
         <button onClick={props.func} className='px-6 py-2 border rounded-xl w-full mx-auto text-xl'>{props.title}</button>
    </div>
  )
}

export default Button