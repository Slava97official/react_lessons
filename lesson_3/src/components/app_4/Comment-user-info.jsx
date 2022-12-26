// Принимаем значения из Comments и передаем отредаренный html в Comments
import React from "react"
import './comment.scss'

const UserInfo = props => { // Принимает аргументы и подготовленный HTML возвращает обратно по запросу
    return (
        <div className="user-info">
            <img src={props.user.avatarUrl} alt={props.user.name} className="avatar" />
            <div className="user-info__name">{props.user.name}</div>
        </div>
    )
}

export default UserInfo