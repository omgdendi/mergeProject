import React from "react";
import {connect} from "react-redux";
import QuestionList from "./QestionList";

class GameListContainer extends React.Component {

    render() {
        return (
            <QuestionList />
        );
    }
}

const mapStateToProps = (state) => ({

});


const mapDispatchToProps = (dispatch) => {
    return {
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(GameListContainer)