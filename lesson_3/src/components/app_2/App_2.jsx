import React from "react";
import './style.scss'


const seconds = new Date().getSeconds()
const backgroundcolor = seconds % 2 === 0
    ? '#fff'
    : '#000';
  
const textcolor = seconds % 2 === 0
    ? '#000'
    : '#fff';    

const style_color = {
    backgroundColor: backgroundcolor,
    color: textcolor,
}

const App_2 = () => {
    return <>
    <div 
        style={style_color} className="seconds">{seconds}</div>
    </>
}
export default App_2

