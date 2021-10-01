import React from "react";
import {connect} from "react-redux";
import Field from "./Field";



class FieldContainer extends React.Component {
    id = [1, 2, 3, 4, 6]

    render() {
        return <Field id={this.id}/>
    }
}

const mapStateToProps = (state) => ({

});


const mapDispatchToProps = (dispatch) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(FieldContainer)