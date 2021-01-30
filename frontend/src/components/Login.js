import React, { Component } from "react"
import { axiosInstance } from "../AxiosApi"
export default class Login extends Component {
    constructor() {
        super()
        this.state = {
            username: "",
            password: ""
        }
    }
    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }
    // must need to add async and
    handleSubmit = async (event) => {
        event.preventDefault()
        try {
            const data = await axiosInstance.post("token/obtain/", {
                username: this.state.username,
                password: this.state.password
            })
            axiosInstance.defaults.headers["Authorization"] =
                "JWT " + data.access
            localStorage.setItem("access_token", data.access)
            localStorage.setItem("refresh_item", data.refresh)
            console.log("logged in")
            return data
        } catch (error) {
            throw error
        }
    }
    render() {
        return (
            <form className="login-form" onSubmit={this.handleSubmit}>
                <div className="form-control">
                    <lable /> User Name
                    <input
                        name="username"
                        type="text"
                        value={this.state.username}
                        onChange={this.handleChange}
                        placeholder="User Name"
                    />
                    <lable /> Password
                    <input
                        name="password"
                        type="password"
                        value={this.state.password}
                        onChange={this.handleChange}
                        placeholder="Password"
                    />
                    <input className="btn-login" type="submit" value="Login" />
                </div>
            </form>
        )
    }
}
