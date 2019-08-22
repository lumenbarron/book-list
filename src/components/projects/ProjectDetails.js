import React from 'react'

const ProjectDetails = (props) => {
    const id = props.match.params.id;
    return (
      <section className="container section project-details">
        <section className="card z-depth-0">
          <section className="card-content">
            <span className="card-title">Project Title {id}</span>
            <p>Information</p>
          </section>
          <section className="card-action lighten-4 grey-text">
            <section>Posted by Lucy</section>
            <section>19 de julio, 3p.m.</section>
          </section>
        </section>
      </section>
    );
}

export default ProjectDetails



