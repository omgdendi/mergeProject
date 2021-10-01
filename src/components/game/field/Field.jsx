import React from "react";
import HexagonContainer from "./hexagon/HexagonContainer";

const Field = (props) => {

    let HexagonElements = props.id.map(i => <HexagonContainer id={i}/>)

    return (
        <div>
            {HexagonElements}
        </div>
    );
}

export default Field;