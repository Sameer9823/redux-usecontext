import React, { useState } from 'react'
import { use } from 'react'

function Bgcolor() {
    const [color, setColor] = useState('yellow')
  return (
    <div className='w-full h-screen transition-all duration-1000' style={{backgroundColor: color}}>
        <div>
            <h1 className='text-center text-4xl font-bold text-white'>Change Background Color</h1>
            <div className='flex justify-center gap-5 mt-5'>
                <button onClick={() => setColor('red')} className='bg-red-500 text-white p-2 rounded-lg'>Red</button>
                <button onClick={() => setColor('blue')} className='bg-blue-500 text-white p-2 rounded-lg'>Blue</button>
                <button onClick={() => setColor('green')} className='bg-green-500 text-white p-2 rounded-lg'>Green</button>
                <button onClick={() => setColor('gray')} className='bg-yellow-500 text-white p-2 rounded-lg'>Yellow</button>
            </div>
        </div>
    </div>
  )
}

export default Bgcolor