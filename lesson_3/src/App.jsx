// Простой рендер с подстановкой значений
import React from "react";


const input_style = {
    color: 'green',
    fontWeight: 200,
}

const send_btn = {
    backgroundColor: 'black',
    color: 'white',
    borderRadius: '20px',
    padding: '5px 20px',
    cursor: 'pointer',
}


const App = () => {
    return <>
    <form action="">
        <label htmlFor="input-name"></label>
        <input id="input-name" className="test" type="text" placeholder="your-name"/>
        <h1 style={input_style}>Test text</h1>
        <h2 style={{ color: 'red', fontSize: '40px' }}>Test text 2</h2>
        <button style={send_btn} type="submit">Отправить</button>
    </form>
    
    </>
};





export default App;
