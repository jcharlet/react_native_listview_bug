
import BottomTabNavigator from "./BottomTabNavConfiguration"
import {
    NavigationActions,
} from 'react-navigation';
import {NAV_HACK_DETAILS, NAV_HISTORY} from "../../actions/actionTypes";

const initialNavState = {
    index: 1,
    routes: [
        { key: 'InitB', routeName: NAV_HACK_DETAILS },
        { key: 'InitC', routeName: NAV_HISTORY },
    ],
};

export default (state = initialNavState, action) => {
    let nextState = BottomTabNavigator.router.getStateForAction(action, state);

    switch (action.type) {
        case NAV_HACK_DETAILS:
            nextState = BottomTabNavigator.router.getStateForAction(NavigationActions.navigate({routeName:NAV_HACK_DETAILS}), state);
            break;
        case NAV_HISTORY:
            nextState = BottomTabNavigator.router.getStateForAction(NavigationActions.navigate({routeName:NAV_HISTORY}), state);
            break;
    }
    // Simply return `state` if `nextState` is null or undefined
    return nextState || state;
};
