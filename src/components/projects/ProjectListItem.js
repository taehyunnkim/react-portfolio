import React from 'react'

function ProjectListItem({project}) {
  return (
    <article className='project-item'>
        <h2 className='project-item-title'>{project.title}</h2>
        <p className='project-item-description'>{project.shortDescription}</p>
        <p className='project-item-date'>{project.date}</p>
    </article>
  )
}

export default ProjectListItem;