import React, { Component } from "react"
import axiosInstance from "../AxiosApi"

export default class Home extends Component {
    constructor() {
        super()
        this.state = {
            aboutData: []
        }
    }
    getData = async () => {
        try {
            const response = await axiosInstance.get("/v1/about/")
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
        const data = this.getData()
        console.log(data)
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
