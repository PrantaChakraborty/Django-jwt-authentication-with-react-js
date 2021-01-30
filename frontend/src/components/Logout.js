import React, { Component } from "react"
import { Redirect } from "react-router-dom"
import { axiosInstance } from "../AxiosApi"
export default class Logout extends Component {
    constructor() {
        super()
        this.state = {
            redirect: false
        }
    }
    handleLogout = async () => {
        // const x = localStorage.getItem("refresh_token")
        // const y = localStorage.getItem("access_token")
        // console.log(" logout refresh_token", x)
        // console.log(" logout access_token", y)
        try {
            const refresh_token = localStorage.getItem("refresh_token")
            // console.log(refresh_token)
            const response = await axiosInstance.post("token/blacklist/", {
                refresh_token: refresh_token
            })
            localStorage.removeItem("access_token")
            localStorage.removeItem("refresh_token")
            axiosInstance.defaults.headers["Authorization"] = null
            this.setState({ redirect: true })
            return response
        } catch (e) {
            console.log(e)
        }
    }
    rederRedirect = () => {
        if (this.state.redirect) {
            return <Redirect to="/login" />
        }
    }
    render() {
        return (
            <div>
                <h3>Do you want to Logout?</h3>
                {this.rederRedirect()}
                <button onClick={this.handleLogout}>Yes</button>
            </div>
        )
    }
}
