import React, { Component } from 'react';
import {createProjectAction } from '../../store/actions/projectAction';
import { connect } from 'react-redux';

class CreateProject extends Component {
    state = {
        title : '',
        content : ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state)
        //this.props.createProjectAction(this.state)
    }

    render() {
        return (
            <section className="container">
                <form onSubmit={this.handleSubmit} className="white">
                    <h5 className="grey-text text-darken-3">Create Project</h5>
                    <section className="input-field">
                        <label htmlFor="title">title</label>
                        <input autoComplete="off" type="text" id="title" onChange={this.handleChange}></input>
                    </section>

                    <section className="input-field">
                        <label htmlFor="content">content</label>
                        <textarea id="content"  className="materialize-textarea" onChange={this.handleChange}></textarea>
                    </section>


                    <section className="input-field">
                        <button className="btn pink lighten-1 z-depth-0">
                        Create
                        </button>
                    </section>
                </form>
                
            </section>
        )
    }
}

// const mapDispatchProps = (dispatch) => {
//     return {
//         createProjectAction : (project) => dispatch(createProjectAction(project))
//     }
// }
export default CreateProject
//export default connect(null, mapDispatchProps)(CreateProject)
