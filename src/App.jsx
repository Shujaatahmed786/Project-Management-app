import React from 'react'
import ProjectSidebar from './components/ProjectSideBar'
import NewProject from './components/NewProject'
import NoProjectSelected from './components/NoProjectSelected'
import { useState } from 'react'

const App = () => {
  const [projectState, setProjectState] = useState({
    setProjectStateId: undefined,
    projectState:[]
  });

  function handleStartAddProject(){
    setProjectState(prevState => {
      return{
        selectedProjectId: null,
      }
    })
  }
  let content;
  if(projectState.selectedProjectId === null){
    content = <NewProject />
  }else if(projectState.selectedProjectId === undefined){
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />

  }
  return (
    <div className='h-screen my-8 flex gap-8'>
      <ProjectSidebar onStartAddProject={handleStartAddProject}/>
      <NoProjectSelected onStartAddProject={handleStartAddProject}/>
   </div>
  )
}

export default App