import React from "react"
import ReactDOM from "react-dom"
import './styles.css'

const rootApp = document.querySelector('#root')

const element = (
    <div className="hello">
        <p class="hello__text">test text</p>
    </div>
)

ReactDOM.render(element, rootApp)