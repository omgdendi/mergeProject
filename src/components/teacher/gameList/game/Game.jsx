import React from "react";
import {NavLink} from "react-router-dom";

const Game = (props) => {

    let onResultClick = () => {
        props.setTitle(props.title);
    }

    return (
        <div>
            <div>{props.title}</div>

            <NavLink to='/teacher/result' onClick={onResultClick}>Посмотреть результаты</NavLink>
            <br/><br/>
        </div>
    )
}

export default Game;