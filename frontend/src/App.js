import React, { Component } from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./components/Home"
import Login from "./components/Login"
import Signup from "./components/Signup"
import Logout from "./components/Logout"

export default class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: props.username,
            password: props.password
        }
    }
    handleLogin = () => {
        console.log(this.state.username)
    }
    render() {
        return (
            <div className="container">
                <Router>
                    <Navbar />
                    <Switch>
                        <Route exact path="/">
                            <Home />
                        </Route>
                        <Route path="/login">
                            <Login onLogin={this.handleLogin} />
                        </Route>
                        <Route path="/signup">
                            <Signup />
                        </Route>
                        <Route path="/logout">
                            <Logout />
                        </Route>
                    </Switch>
                </Router>
            </div>
        )
    }
}
