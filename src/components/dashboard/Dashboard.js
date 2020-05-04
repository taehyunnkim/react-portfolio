import React, { Component } from 'react'
import ProjectList from '../projects/ProjectList';
import { connect } from 'react-redux';

class Dashboard extends Component {
  render() {
    const { projects } = this.props;
    return (
      <div id='dashboard'>
        <h1>Projects</h1>
        <ProjectList projects={projects} />
      </div>
    )
  }
}

// Mapping the state the new wrapper component will subscribe to Redux store updates. 
// This means that any time the store is updated, mapStateToProps will be called. 
// The results of mapStateToProps must be a plain object, which will be merged into the wrapped component’s props.
const mapStateToProps = (state) => {
  return {
    projects: state.projectReducer.projects
  }
}

export default connect(mapStateToProps)(Dashboard);