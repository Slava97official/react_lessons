// Принимает в себя btn с обработчиками событий
import React from 'react'
import ReactDOM from 'react-dom'
import './style.scss'
import Btn_1 from './handlers-btn'
import Btn_2 from './handlers-btn-2'
import Counter from './handlers-btns-counter'
import Colors from './handler-colors'

const Handlers = () => {
    return <>
    <Btn_1 message='hello!' />
    <div><Btn_2 /></div>
    <div><Counter /></div>
    <div><Colors /></div>
    </>
}

export default Handlers