const ADD_QUESTION = 'ADD_QUESTION';
const CLOSE_QUESTION = 'CLOSE_QUESTION';

let initialState = {
    currentQuestion: null,
    isQuestionShown: false
}

const QuestionReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_QUESTION:
            return {
                ...state,
                currentQuestion: action.question,
                isQuestionShown: true
            }
        case CLOSE_QUESTION:
            return {
                ...state,
                currentQuestion: null,
                isQuestionShown: false
            }
        default:
            return state
    }
}

export let addQuestionAC = (question) => ({
    type: ADD_QUESTION,
    question: question
})


export let closeQuestionAC = () => ({
    type: CLOSE_QUESTION
})

export default QuestionReducer;