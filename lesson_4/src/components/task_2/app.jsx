// Условный рендеринг 2
import { Component } from "react";
import React from "react";
import MailBox from "./Messages"


const text1 = 'aaaaa bbbbb ccccc ddddd'
const text2 = 'ddddd ccccc bbbbb aaaaa'


export default class Mail extends Component {
    state = {
        text: null
    }

    setText = text => {
        this.setState({
            text
        })
    }

    render() {
        return(
            <>
            <div className="app">
                <h3 className="app-name">Условный рендеринг 2</h3>
                <MailBox unreadMessages={['asda', 'asdasd']}/>
                <h3 style={{height: '30px'}}>{this.state.text}</h3>
                <div>
                    <button onClick={() => this.setText(text1)}>text 1</button>
                    <button onClick={() => this.setText(text2)}>text 2</button>
                    <button onClick={() => this.setText('')}>Clear</button>
                </div>

            </div>

            </>   
        )
    }
}