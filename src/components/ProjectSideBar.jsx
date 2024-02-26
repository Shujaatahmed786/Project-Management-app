import React from 'react'
import Button from './Button'
import SelectedProject from './SelectedProject'

const ProjectSidebar = ({onStartAddProject, projects ,onSelectProject,SelectedProjectId,}) => {
  return (
    <div className='h-44'>
        <div className='h-[30rem] w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl'>
            <h2 className='mb-8 font-bold uppercase md:text-xl text-stone-200'>Your Project</h2>
            <Button onClick={onStartAddProject}>+ Add Project</Button>
            <ul>{projects && projects.map((project) =>{
                let cssClasses = 'w-full text-left px-2 py-1 rounded-s my-1 text-stone-400 hover:text-stone-200 hover:bg-stone-800'
                   if(project.id === SelectedProjectId){
                    cssClasses += 'bg-stone-800 text-stone-200'

                   }else{
                    cssClasses += 'text-stone-400'
                   }
              return(<li key={project.id}>
                <button className={cssClasses} onClick={()=>onSelectProject(project.id)}>{project.title}</button>
              </li>)}
              )}</ul>
            
        </div>
    </div>
  )
}

export default ProjectSidebar