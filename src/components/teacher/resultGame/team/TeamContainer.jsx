import React from "react";
import {connect} from "react-redux";
import Team from "./Team";


class TeamContainer extends React.Component {
    render() {
        return (
            <Team number={this.state.number} players={this.state.players}/>
        );
    }
}

const mapStateToProps = (state) => ({

});


const mapDispatchToProps = (dispatch) => {
    return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(TeamContainer)