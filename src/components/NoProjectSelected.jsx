import React from 'react'
import Button from './Button'

const NoProjectSelected = () => {
  return (
    <div className='mt-24 text-center w-2/3'>
        <h2 className='text-xl font-bold text-stone-500 my-4'>No Project Selected</h2>
        <p className='text-stone-400 mb-4'>Select a project or getting started with the new one</p>
        <div className='mt-8'>
            <Button>Create a new project</Button>
            </div>
       

    </div>
  )
}

export default NoProjectSelected