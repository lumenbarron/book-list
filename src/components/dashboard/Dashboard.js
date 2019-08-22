import React, {Component} from 'react';
import Notification from './notification';
import ProjectList from '../projects/ProjectList';
import { connect } from 'react-redux';
import Noticias from './Noticias';

class Dashboard extends Component  {
    render () {
      console.log(this.props)
      const {projects} = this.props
        return (
          <section className="dashboard container">
            <section className="row">
              <section className="col s12 m6">
              <ProjectList projects = {projects}/>
              </section>
              <section className="col s12 m5 offset-m1">
              <Noticias />
              <Notification notifications = {projects}/>
              </section>
            </section>
          </section>
        );
    }
}

const mapStateProps = (state) => {
return {
  projects : state.project.projects,
  notifications : state.project.notifications
}
}

export default connect(mapStateProps)(Dashboard)