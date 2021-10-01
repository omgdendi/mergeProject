import logo from './logo.svg';
import './App.css';
import FieldContainer from "./components/game/field/FieldContainer";
import QuestionContainer from "./components/game/window/WindowContainer";
import GameListContainer from "./components/teacher/gameList/GameListContainer";
import {Route} from "react-router-dom";
import ResultGameContainer from "./components/teacher/resultGame/ResultGameContainer";
import React from "react";

// test ci

function App() {
    return (
        <div className="App">
            <Route path='/game' render={() => <>
                <FieldContainer/>
                <QuestionContainer/>
            </>}/>
            <Route exact path='/teacher' render={() => <GameListContainer/>}/>
            <Route path="/teacher/result/" render={() => <ResultGameContainer/>}/>
        </div>
    );
}

export default App;
