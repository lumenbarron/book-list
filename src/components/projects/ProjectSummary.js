import React from 'react';

const ProjectSummary = ({project}) => {
    return (
        <section className="card z-depth-0 project-summary">
        <section className="card-content grey-text text-darken-3">
          <span className="card-title">{project.title}</span>
          <p>Posted by lucy</p>
          <p className="grey-text"> 19 de junio</p>
        </section>
        </section>
    )
}

export default ProjectSummary