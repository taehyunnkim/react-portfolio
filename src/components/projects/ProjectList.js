import React from 'react'
import ProjectListItem from './ProjectListItem';

function ProjectList({projects}) {
  return (
    <section id='project-list'>
      {projects && projects.map(project => {
        return <ProjectListItem project={project}  key={project.title}/>
      })}
    </section>
  )
}

export default ProjectList;