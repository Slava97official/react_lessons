// Обработчик событий с правильным выносом
import React from 'react'
import ReactDOM from 'react-dom'
import './style.scss'
import { Component } from 'react'


class Counter extends React.Component {
    constructor(props) {    // constructor хранит состояние объекта
        super(props);   // Наследуемся от родителя и на всякий случай ставим props
        this.state = {
            counter: 5,
        };

    }

    decrement = () => { // обработчик событий
        this.setState({ // перерендор с новыми значеними
            counter: this.state.counter - 1    
        })
    }

    increment = () => {
        this.setState({
            counter: this.state.counter + 1
        })
    }

    reset() {   // Второй метод обработчика - вызов из стрелочной функции в DOM
        this.setState({
            counter: 0
        })
    }

    render() {
        return (
            <div>
                <h2>Счетчик</h2>
                <div className="counter-block">
                    <div className='btn-counter' onClick={this.decrement}>-</div>
                    <div className='result' onClick={() => this.reset()}>{this.state.counter}</div>
                    <div className='btn-counter' onClick={this.increment}>+</div>
                </div>
            </div>
        )
    }
}


export default Counter
