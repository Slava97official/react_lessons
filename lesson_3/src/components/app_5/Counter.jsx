// Обновление состояния по таймауту
import React, { Component } from "react";
import './style.scss'


class Counter extends Component {
    constructor() { // Создается один раз в компоненте
        super() // Наследование от Component
        this.state = { // Работа с состоянием возможна в конструкции state
            counter: 0,
        }


        // Не рекомендуется так делать! Т.к setState полностю перерендовает компанент
        setInterval(()=> {
            this.setState({ 
                counter: this.state.counter += 1    // Роутинг состояния между this.state и render
            }) // Метод для изменения состояния
        }, 1000)
    }
    render() {
        return (
            <div className="counter">Counter: {this.state.counter}</div>
        )
    }
} 


export default Counter