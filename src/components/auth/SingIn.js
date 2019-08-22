import React, { Component } from 'react'

export default class SingIn extends Component {
    state = {
        email : '',
        password : '',
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
                    <h5 className="grey-text text-darken-3">Sign In</h5>
                    <section className="input-field">
                        <label htmlFor="email">Email</label>
                        <input autoComplete="off" type="email" id="email" onChange={this.handleChange}></input>
                    </section>

                    <section className="input-field">
                        <label htmlFor="password">password</label>
                        <input autoComplete="off" type="password" id="password" onChange={this.handleChange}></input>
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
