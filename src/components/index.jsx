import React from 'react'
import { useState } from 'react'

const index = () => {
    const [count, setcount] = useState(0)

    return (
        <div className='flex justify-center'>
        <div>
            <div className='flex justify-center mb-10 border-solid border-2 border-[#000] w-10 '>
            {count}
            </div>
            <div className='flex justify-center gap-6 '>
                <button onClick={() => setcount(count + 1)} className='border-solid border-2 border-[#3c46a5]'>Incremnet +</button>
                <button onClick={() => setcount(count - 1)} className='border-solid border-2 border-[#f74b4b]'>Decrement -1</button>
                <button onClick={() => setcount(count * 0)} className='border-solid border-2 border-[#4fdf4a]'>Reset</button>

            </div>
        </div>
        </div>

    )
}

export default index