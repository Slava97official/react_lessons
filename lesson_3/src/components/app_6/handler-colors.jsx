// Обработчик событий / изменение состояния документа
import React from 'react'
import ReactDOM from 'react-dom'
import './style.scss'
import { Component } from 'react'


const RED = '#f00'
const GREEN = '#0f0'
const BLUE = '#00f'

class Colors extends React.Component {
    setBodyColor = color => { // функция принимает color
        document.body.style.backgroundColor = color
    }


   render() {
    return (
        <div className="colors">
            <button className='colors__btn' style={{backgroundColor: RED}} onClick={() =>this.setBodyColor(RED)}></button>
            <button className='colors__btn' style={{backgroundColor: GREEN}} onClick={() =>this.setBodyColor(GREEN)}></button>
            <button className='colors__btn' style={{backgroundColor: BLUE}} onClick={() =>this.setBodyColor(BLUE)}></button>
        </div>
    )
   }
}


export default Colors
