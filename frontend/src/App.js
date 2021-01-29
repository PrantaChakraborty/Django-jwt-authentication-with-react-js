import React, { Component } from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./components/Home"
import Login from "./components/Login"
import Signup from "./components/Signup"
import Logout from "./components/Logout"

export default class App extends Component {
    render() {
        return (
            <div>
                <Router>
                    <Navbar />
                    <Switch>
                        <Route exact path="/">
                            <Home />
                        </Route>
                        <Route path="/login">
                            <Login />
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
