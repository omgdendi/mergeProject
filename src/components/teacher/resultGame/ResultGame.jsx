import React from "react";
import Team from "./team/Team";
import {NavLink} from "react-router-dom";

const ResultGame = (props) => {

    return (
        <div>
            <p>Результаты игры</p>
            <p>{props.title}</p>
            <Team number='1' players={props.firstTeam}/>
            <Team number='2' players={props.secondTeam}/><br/>
            <NavLink to='/teacher'>Обратно</NavLink>
        </div>
    )
}

export default ResultGame;