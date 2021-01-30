import React, { Component } from "react"
import { axiosInstance } from "../AxiosApi"

export default class Home extends Component {
    constructor() {
        super()
        this.state = {
            aboutData: []
        }
    }
    getMessage = async () => {
        try {
            let response = await axiosInstance.get("v1/about/")
            const fetchData = response.data
            this.setState({
                aboutData: fetchData
            })
            console.log(fetchData)
            return fetchData
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
                {this.state.aboutData.map((item) => (
                    <div key={item.id}>
                        <h2>Name: {item.name}</h2>
                        <p>Address: {item.address}</p>
                        <p>Phone Number: {item.phone_no}</p>
                        <br></br>
                    </div>
                ))}
            </div>
        )
    }
}
