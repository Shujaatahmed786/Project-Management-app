import React, { useState } from 'react';
import ProjectSidebar from './components/ProjectSideBar';
import NewProject from './components/NewProject';
import NoProjectSelected from './components/NoProjectSelected';
import SelectedProject from './components/SelectedProject';

const App = () => {
  const [projectState, setProjectState] = useState({
    selectedProjectId: undefined,
    projects: [],
  });

  function handleStartAddProject() {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: null,
      };
    });
  }

  function handleCancelProject() {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
      };
    });

  }

  function handleSelectProject(id) {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: id,
      };
    });
  }

  function handleAddProject(projectData) {
    setProjectState((prevState) => {
      const projectId = Math.random();
      const newProject = {
        ...projectData,
        id: projectId,
      };

      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: [...prevState.projects, newProject],
      };
    });
  }

  function handleDeleteProject(){
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: prevState.projects.filter((project) => project.id !== prevState.selectedProjectId),
      };
    });
  }

  const selectedProject = projectState.projects.find(project => project.id === projectState.selectedProjectId);

  let content = <SelectedProject project={selectedProject} onDelete={handleDeleteProject}/>;
  if (projectState.selectedProjectId === null) {
    content = <NewProject onAdd={handleAddProject} onCancel={handleCancelProject} />;
  } else if (projectState.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />;
  }

  return (
    <div className='h-screen my-8 flex gap-8'>
      <ProjectSidebar onStartAddProject={handleStartAddProject} 
      projects={projectState.projects}
      onSelectProject={handleSelectProject} />
      {content}
    </div>
  );
}

export default App;
