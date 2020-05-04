import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class ProjectListItem extends Component {
  state = {
    close: true
  }

  toggleDetails = () => {
    this.setState({
      close: !this.state.close
    });
  }

  render() {
    const { project } = this.props;
    return (
        <article>
          <div className={this.state.close ? 'project-item' : 'project-item project-active'} onClick={this.toggleDetails}>
            <h2 className='project-item-title'>{project.title}</h2>
            <p className='project-item-description'>{project.shortDescription}</p>
            <p className='project-item-date'>{project.date}</p>
          </div>
          <div className={this.state.close ? 'project-details' : 'project-details open-details'}>
            <ul>
              {project.skills.split(', ').map((skill) => {
                return <li className={'skills ' + skill.toLowerCase()} key={skill}>{skill}</li>
              })}
            </ul>
            <p className='project-item-description-long'>{project.longDescription}</p>
            <div>
              <h3>Github</h3>
              <h3>View Project</h3>
            </div>
          </div>
        </article>
      // <Link to={'/' + project.title}>
      // </Link>
    )
  }
}

export default ProjectListItem;