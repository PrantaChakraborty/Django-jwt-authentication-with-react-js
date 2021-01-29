import React, { Component } from "react"
import { axiosInstance } from "../AxiosApi"

export default class Home extends Component {
    constructor() {
        super()
        this.state = {
            message: ""
        }
    }
    getMessage = async () => {
        try {
            let response = await axiosInstance.get("/hello/")
            const fetchMessage = response.data.hello
            this.setState({
                message: fetchMessage
            })
            console.log(fetchMessage)
            return fetchMessage
        } catch (error) {
            console.log("Error: ", JSON.stringify(error, null, 4))
            throw error
        }
    }

    componentDidMount() {
        const messageData1 = this.getMessage()
        console.log("MessageData1: ", JSON.stringify(messageData1, null, 4))
    }
    render() {
        return (
            <div>
                <p>{this.state.message}</p>
            </div>
        )
    }
}
