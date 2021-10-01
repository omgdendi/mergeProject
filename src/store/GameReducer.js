const SET_CURRENT_TITLE = 'SET_CURRENT_TITLE';

let initialState = {
        currentGame: {
            firstTeam: [
                {
                    name: 'Света',
                    score: 500
                },
                {
                    name: 'Даня',
                    score: 200
                }
            ],
            secondTeam: [
                {
                    name: 'Кирилл',
                    score: 700
                },
                {
                    name: 'Матвей',
                    score: 100
                }
                ]
        },
    currentTitle: null
}

const GameReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CURRENT_TITLE:
            return {
                ...state,
                currentTitle: action.currentTitle
            }
        default:
            return state
    }
}

export let setCurrentTitleAC = (title) => ({
    type: SET_CURRENT_TITLE,
    currentTitle: title
})


export default GameReducer;