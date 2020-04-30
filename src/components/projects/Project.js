import React from 'react'

function Project(props) {
  return (
    <section id='project'>
        <h2 className='project-title'>Vocaby {props.match.params.id}</h2>
        <p className='project-description'>A Vocabulary Building Google Extension Project</p>
        <p className='project-date'>Jan 2020 - Present</p>
    </section>
  )
}

export default Project;