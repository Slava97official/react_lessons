// Условный рендеринг
import React, { Component } from "react";
import Greeting from "./Greeting";


export default class Auth extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isLoggedIn: false
        }
    }
    
    render() {
        const button = this.state.isLoggedIn
            ? <button onClick={() => {this.setState({isLoggedIn: false})}} >Logout</button>
            : <button onClick={() => {this.setState({isLoggedIn: true})}} >Login</button>

        return (
            <div className="app">
                <h2 className="app-name">Условный рендеринг</h2>
                <div>
                    <Greeting isLoggedIn={this.state.isLoggedIn} />
                </div>
                <div>
                   {button}
                </div>
            </div>
        )
    }
}