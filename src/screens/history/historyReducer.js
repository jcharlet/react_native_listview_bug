import {
    REMOVE_HACK, LOAD_RIDES
} from '../../actions/actionTypes';

const initialState = {
    rides:[],
    // index:1,
    index:undefined,
};

export default (state = initialState, action = {}) => {
    switch (action.type) {
        case LOAD_RIDES:
            return loadRides(state, action.payload);
        case REMOVE_HACK:
            return removeHack(state, action.payload);
        default:
            return state;
    }
};

const loadRides = (state, payload) =>{
    let rides =payload || [];
    rides = rides.map(ride => {
        return {
            ...ride.analytics,
            timeSpentByGait:null,
            date: ride.date
        }
    });
    rides = rides.reverse();
    return {
        ...state,
        rides:rides,
        index:rides.length-1,
    }
};

const removeHack = (state, date:string) =>{
    let rideArray = state.rides;
    let newRideArray = rideArray.filter(function (item) {
        return item.date !== date;
    });
    let indexOfElementToRemove = rideArray.map(function(x) {return x.date; }).indexOf(date);
    let newIndex = indexOfElementToRemove-1>=0?indexOfElementToRemove-1:0;
    return {
        ...state,
        rides:newRideArray,
        index:newIndex
    };
};
