import React from 'react'

function Props({title, image, description}) {
  return (
    <div className='bg-gray-700 text-amber-400 justify-center items-center p-5 rounded-lg'>
        <div className='w-96 flex flex-col justify-center items-center'>

        <h1>{title}</h1>
        <img src={image} width="200px" alt="" />
        <p>{description}</p>
        </div>
    </div>
  )
}

export default Props