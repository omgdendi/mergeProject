import React from "react";
import GameContainer from "./game/GameContainer";

const GameList = (props) => {
    let games = props.titles.map(t => <GameContainer title={t}/>)

    return (
        <div>
            <button>Создать игру</button>
            <p>Прошлые игры</p>
            {games}
        </div>
    )
}

export default GameList;