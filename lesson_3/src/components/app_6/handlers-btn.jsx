// Обработчик событий
import React from 'react'
import ReactDOM from 'react-dom'
import './style.scss'

const Btn_1 = props => { // Простой обработчик
    return <>
    <button className='btn' onClick={() => alert(`${props.message}`)}>Нажми</button>
    </>
}

export default Btn_1
