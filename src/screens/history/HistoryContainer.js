import React, {Component} from 'react';
import {connect} from "react-redux";
import HistoryScreen from "./HistoryScreen";
import {NAV_HACK_DETAILS} from "../../actions/actionTypes";

const mapStateToProps = (state) => {
    return {
        history: state.history
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        navigateToHackDetails : (index) =>{
            dispatch({
                type: NAV_HACK_DETAILS,
                payload: index,
            });
        }
    }
};


const HistoryContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(HistoryScreen);

export default HistoryContainer

