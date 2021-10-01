import React from "react";
import {connect} from "react-redux";
import Hexagon from "./Hexagon";
import {addQuestionAC} from "../../../../store/QuestionReducer";

class HexagonContainer extends React.Component {


    // функция, которая подгружает вопрос по айдишнику
    onHexagonClick = () => {
        let question = 'hello';
        this.props.addQuestion(question);
    }

    render() {
        return (
            <div>
                <Hexagon onHexagonClick={this.onHexagonClick}/>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({

});


const mapDispatchToProps = (dispatch) => {
        return {
            addQuestion: (question) => {
                dispatch(addQuestionAC(question))
            }
        }
    }

export default connect(mapStateToProps, mapDispatchToProps)(HexagonContainer)