import React, { Component } from 'react'

export default class SingUp extends Component {
    state = {
        email : '',
        password : '',
        firstName : '',
        lastName : '',
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state)
    }

    render() {
        return (
            <section className="container">
                <form onSubmit={this.handleSubmit} className="white">
                    <h5 className="grey-text text-darken-3">Sign Up</h5>
                    <section className="input-field">
                        <label htmlFor="email">Email</label>
                        <input autoComplete="off" type="email" id="email" onChange={this.handleChange}></input>
                    </section>

                    <section className="input-field">
                        <label htmlFor="password">Password</label>
                        <input autoComplete="off" type="password" id="password" onChange={this.handleChange}></input>
                    </section>

                    <section className="input-field">
                        <label htmlFor="firstName">First Name</label>
                        <input autoComplete="off" id="firstName" onChange={this.handleChange}></input>
                    </section>

                    <section className="input-field">
                        <label htmlFor="lastName">Last Name</label>
                        <input autoComplete="off"  id="lastName" onChange={this.handleChange}></input>
                    </section>

                    <section className="input-field">
                        <button className="btn pink lighten-1 z-depth-0">
                        Login
                        </button>
                    </section>
                </form>
                
            </section>
        )
    }
}
