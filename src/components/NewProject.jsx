import React from 'react'
import Input from './Input'

const NewProject = () => {
    return (
        <div className='w-[35rem] mt-16'>
            <div className='flex items-center justify-end gap-4 my-4 list-none'>
              
                    <li><button className='text-stone-800 hover:text-stone-800'>Cancel</button></li>
                    <li><button className='px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950'>Save</button></li>
               
            </div>
            <div>
                <Input label='Title' />
                <Input label='Description' textarea />
                <Input label='Duration ' />

            </div>
        </div>
    )
}

export default NewProject