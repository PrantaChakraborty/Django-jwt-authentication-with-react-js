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
            this.setState({
                aboutData: response.data
            })
            return response.data
        } catch (error) {
            console.log("Error: ", JSON.stringify(error, null, 4))
            throw error
        }
    }

    componentDidMount() {
        this.getMessage()
    }
    render() {
        return (
            <div>
                {this.state.aboutData.map((item) => (
                    <div>
                        <h2 key={item.id}>Name: {item.name}</h2>
                        <p>Address: {item.address}</p>
                        <p>Phone Number: {item.phone_no}</p>
                        <br></br>
                    </div>
                ))}
            </div>
        )
    }
}
