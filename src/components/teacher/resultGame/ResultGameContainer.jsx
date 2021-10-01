import React from "react";
import {connect} from "react-redux";
import ResultGame from "./ResultGame";


class ResultGameContainer extends React.Component {
    render() {
        return (
            <ResultGame
                title={this.props.title}
                firstTeam={this.props.firstTeam}
                secondTeam={this.props.secondTeam}
            />
        );
    }
}

const mapStateToProps = (state) => ({
    title: state.game.currentTitle,
    firstTeam: state.game.currentGame.firstTeam,
    secondTeam: state.game.currentGame.secondTeam
});


const mapDispatchToProps = (dispatch) => {
    return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(ResultGameContainer)