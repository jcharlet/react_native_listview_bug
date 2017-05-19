
import React from 'react';
import HackDetailsScreen from "./HackDetailsScreen";
import {connect} from "react-redux";
import {showPreviousRide, showNextRide, removeRide} from "./hackDetailsActions";
import {wait} from "../../util/utils.js";
import {LOAD_RIDES} from "../../actions/actionTypes";
import * as storageService from "../../modules/storage/storageService";

const mapStateToProps = (state) => {
    return {
        hackDetails: state.hackDetails
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        init: () => {
            dispatch({
                type: LOAD_RIDES,
                payload: storageService.loadRidesByDeviceId()
            });
        },
        showPreviousRide: () => {
            dispatch(showPreviousRide());
        },
        showNextRide: () => {
            dispatch(showNextRide())
        },
        hasPreviousRide: (index:number, length:number) => {
            return hasPreviousRide(index,length)
        },
        hasNextRide: (index:number, length:number) => {
            return hasNextRide(index,length)
        },
        remove: (date:number, distance:number) => {
            dispatch(removeRide(date, distance))
        },
    }
};


function hasPreviousRide(index:number,length:number) {
    return (index>0)
}
function hasNextRide(index:number,length:number) {
    return (index<length-1)
}

const HackDetailsContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(HackDetailsScreen);

export default HackDetailsContainer
