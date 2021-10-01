import React from "react";
import {connect} from "react-redux";
import Window from "./Window";
import {closeQuestionAC} from "../../../store/QuestionReducer";

class WindowContainer extends React.Component {
    render() {
        return (
            <Window
                question={this.props.question}
                isQuestionShown={this.props.isQuestionShown}
                closeQuestion={this.props.closeQuestion}
            />
        );
    }
}

const mapStateToProps = (state) => ({
    question: state.question.currentQuestion,
    isQuestionShown: state.question.isQuestionShown
});


const mapDispatchToProps = (dispatch) => {
    return {
        closeQuestion: () => {
            dispatch(closeQuestionAC())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(WindowContainer)