import React, { Component } from "react"
import { Redirect } from "react-router-dom"
import { axiosInstance } from "../AxiosApi"
export default class Login extends Component {
    constructor() {
        super()
        this.state = {
            username: "",
            password: "",
            redirect: false
        }
    }
    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    // must need to add async and
    handleSubmit = async (event) => {
        event.preventDefault()
        try {
            const response = await axiosInstance.post("token/obtain/", {
                username: this.state.username,
                password: this.state.password
            })
            axiosInstance.defaults.headers["Authorization"] =
                "JWT " + response.data.access
            localStorage.setItem("access_token", response.data.access)
            localStorage.setItem("refresh_token", response.data.refresh)
            // console.log("login: ", response.data.access)
            this.setState({ redirect: true })
            return response.data
        } catch (error) {
            throw error
        }
    }
    // for redirect to home page after successfull login
    rederRedirect = () => {
        if (this.state.redirect) {
            return <Redirect to="/" />
        }
    }
    render() {
        return (
            <form className="login-form" onSubmit={this.handleSubmit}>
                <div className="form-control">
                    <label>User Name</label>
                    <input
                        name="username"
                        type="text"
                        value={this.state.username}
                        onChange={this.handleChange}
                        placeholder="User Name"
                    />
                    <label>Password</label>
                    <input
                        name="password"
                        type="password"
                        value={this.state.password}
                        onChange={this.handleChange}
                        placeholder="Password"
                    />
                    {this.rederRedirect()}
                    <input className="btn-login" type="submit" value="Login" />
                </div>
            </form>
        )
    }
}
