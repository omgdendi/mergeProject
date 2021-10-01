import React from "react";

const Team = (props) => {
    let players = props.players.map(p =>
        <tr>
            <td>
                {p.name}
            </td>
            <td>
                {p.score}
            </td>
        </tr>)

    return (
        <div>
            <p>Команда {props.number}</p>

            <table>
                {players}
            </table>
        </div>
    )
}

export default Team;