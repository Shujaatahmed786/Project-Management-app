import React from 'react'
import Button from './Button'

const ProjectSidebar = ({onStartAddProject}) => {
  return (
    <div className='h-44'>
        <div className='h-[30rem] w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl'>
            <h2 className='mb-8 font-bold uppercase md:text-xl text-stone-200'>Your Project</h2>
            <Button >+ Add Project</Button>
            <ul></ul>
        </div>
    </div>
  )
}

export default ProjectSidebar