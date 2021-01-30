import React, { Component } from "react"
import { axiosInstance } from "../AxiosApi"
export default class Logout extends Component {
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
            return response
        } catch (e) {
            console.log(e)
        }
    }
    render() {
        return (
            <div>
                <h3>Do you want to Logout?</h3>
                <button onClick={this.handleLogout}>Yes</button>
            </div>
        )
    }
}
