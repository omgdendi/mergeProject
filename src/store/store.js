import {combineReducers, createStore} from "redux";
import QuestionReducer from "./QuestionReducer";
import GameReducer from "./GameReducer";

let reducers = combineReducers({
    question: QuestionReducer,
    game: GameReducer
});

let store = createStore(reducers);

window.store = store;

export default store;