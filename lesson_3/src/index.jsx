import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.scss';

import App from './App';
import App_2 from './components/app_2/App_2'
import Comment from './components/app_4/Comment'
import Counter from './components/app_5/Counter'
import Handlers from './components/app_6/handlers'

// направление в DOM
const rootElement = document.querySelector('#root');
const rootApp_2 = document.querySelector('#app_2')
const rootApp_3 = document.querySelector('#app_3')
const rootApp_3_class = document.querySelector('#app_3-class')

const comment = document.querySelector('#comment')
const counter = document.querySelector('#counter')

// Запись с маленькой буквы - это DOM элемент 
// Запись с большой буквы - это пользовательский React компонент

const App_3 = (props) => {   // Функциональный компонент / в props принимаем атрибут name
    console.log(props)
    return (
        <div className="search">
            <h1 className='search__title'>{`Hello, ${props.name}`}</h1>
            <div className='search__field'>
                <input type="text" className='search__input'/>
                <button className='search__button'>Search</button>
            </div>
        </div>
    )
}


class RootApp_3_class extends Component { // Создание компонента через класс. Наследуется от Component
    render() {
        return (
            <div className="search">
                <h1 className='search__title'>{`Hello, ${this.props.name}`}</h1>
                <div className='search__field'>
                    <input type="text" className='search__input'/>
                    <button className='search__button'>Search</button>
                </div>
            </div>
        )
    }
}




const userInfo = { // Переменная с данными для передачи в компонент
    name: 'Slava',
    avatarUrl: 'https://ic.pics.livejournal.com/vergius/37699288/248729/248729_original.jpg'
}

// дубликаты компонентов с разными данными
const AppComment = () => {
    return ( // Дублирующиеся компоненты должны быть обернуты в HTML тег
        <>
        <Comment user={userInfo} text="Hi, bro!" date='2025-02-20'/>
        <Comment user={userInfo} text="Good job!" date='3525-02-20'/>
        </>
    )
}


// Рендер компонентов
ReactDOM.render(<App />, rootElement);
ReactDOM.render(<App_2 />, rootApp_2)
ReactDOM.render(<App_3 name="Bob" age={17}/>, rootApp_3)
ReactDOM.render(<RootApp_3_class name="Bob" age={17}/>, rootApp_3_class)
ReactDOM.render(AppComment(), comment) // Рендер функции компонента
ReactDOM.render(<Counter />, counter)

ReactDOM.render(<Handlers />, document.querySelector('#handlers'))
