import React from "react";
import {connect} from "react-redux";
import Game from "./Game";
import {setCurrentTitleAC} from "../../../../store/GameReducer";

class GameContainer extends React.Component {
    render() {
        return (
            <Game
                title={this.props.title}
                setTitle={this.props.setCurrentTitle}
            />
        );
    }
}

const mapStateToProps = (state) => ({

});


const mapDispatchToProps = (dispatch) => {
    return {
        setCurrentTitle: (title) => {
            dispatch(setCurrentTitleAC(title))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(GameContainer)