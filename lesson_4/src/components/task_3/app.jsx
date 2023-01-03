// Вывод массивов
import React, { Component } from "react";
import ListRender from "./ListRender";
import LiReturn from "./UserList";


const numbers = ['aaa', "fbb", "ccc", "ddd"]
const users = [
    {
        name: 'Gogi',
        age: 20,
        id: 1, 
    },
    {
        name: 'Masha',
        age: 18,
        id: 2,
    }
]

export default class RenderList extends Component {
    state = {
        sorting: '***',
    }

    toggleSorting = () => {
        const newSorting = this.state.sorting === 'asc'
            ? 'desc'
            : 'asc'

        this.setState({
            sorting: newSorting
        })
    }


    render() {
        const userList = users.sort((a, b) => this.state.sorting === 'asc'
                ? a.age - b.age
                : b.age - a.age )

        return(
            <>
            <div className="app">
                <h3 className="app-name">Вывод массивов</h3>
                <ListRender numbers={numbers} />
            </div>
            <div className="app">
                <h3 className="app-name">Вывод списков №2</h3>
                <button onClick={this.toggleSorting}>{this.state.sorting}</button>
                <ul>
                    {userList.map(user => <LiReturn key={user.id} {...user}/>)}
                </ul>
            </div>
            </>
        )
    }
}
