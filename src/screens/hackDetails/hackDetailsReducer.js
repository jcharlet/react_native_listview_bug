import {
    SHOW_NEXT_HACK, SHOW_PREVIOUS_HACK, LOAD_RIDES, REMOVE_HACK, NAV_HACK_DETAILS,
} from '../../actions/actionTypes';

const initialState = {
    rides: [],
    // index:1,
    index: undefined,
};

export default (state = initialState, action = {}) => {
    switch (action.type) {

        case LOAD_RIDES:
            return loadRides(state, action.payload);
        case SHOW_PREVIOUS_HACK:
            return showPreviousHack(state);
        case SHOW_NEXT_HACK:
            return showNextHack(state);
        case REMOVE_HACK:
            return removeHack(state, action.payload);
        case NAV_HACK_DETAILS:
            //FIXME better to use nav routing to show correct hack details
            return showRide(state, action.payload);
        default:
            return state;
    }
};

const showRide = (state, index) => {
    if (index!=null) {
        return {
            ...state,
            index: index
        }
    }
    return {
        ...state,
    };
}

const loadRides = (state, payload) => {
    let rides = payload || [];
    return {
        ...state,
        rides: rides,
        index: rides.length - 1,
    }
}

const showPreviousHack = (state) => {
    return {
        ...state,
        index: state.index - 1
    };
};

const showNextHack = (state) => {
    return {
        ...state,
        index: state.index + 1
    };
};

const removeHack = (state, date: string) => {
    let rideArray = state.rides;
    let newRideArray = rideArray.filter(function (item) {
        return item.date !== date;
    });
    let indexOfElementToRemove = rideArray.map(function (x) {
        return x.date;
    }).indexOf(date);
    let newIndex = indexOfElementToRemove - 1 >= 0 ? indexOfElementToRemove - 1 : 0;
    return {
        ...state,
        rides: newRideArray,
        index: newIndex
    };
};
