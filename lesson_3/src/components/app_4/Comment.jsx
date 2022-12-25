import React from "react";
import UserInfo from './Comment-user-info'
import './comment.scss'




function Comment(props) { // используем UserInfo и передаем в него аргументы
    return( 
        <div className="comment">
            <UserInfo user={props.user}/>   
            <div className="comment__text">{props.text}</div>   
            <div className="comment__date">{props.date}</div>
        </div>
    ) 
}


export default Comment