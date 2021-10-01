import React from "react";
import {connect} from "react-redux";
import GameList from "./GameList";

class GameListContainer extends React.Component {
    titles = ['Математическая игра', 'Физика', 'Какая-то залупа']

    render() {
        return (
            <GameList
                titles={this.titles}
            />
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