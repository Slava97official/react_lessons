// Обработчик событий с правильным выносом
import React from 'react'
import ReactDOM from 'react-dom'
import './style.scss'
import { Component } from 'react'


class Btn_2 extends React.Component {
    handlerClick(e) { // Правильный вызов обработчика e - это событие
        alert('ЗБС')
        console.log(e.target) // Свойства события обнуляются NULL, если не указать target
    }

    render() {
        return (
            <button className='btn' onClick={this.handlerClick}>Нажми_2</button>
        )
    }
}


export default Btn_2
