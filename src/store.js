import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunkMiddleware from 'redux-thunk'
import hackDetailsReducer from "./screens/hackDetails/hackDetailsReducer";
import navReducer from "./navigation/bottomBar/bottomBarNavReducer";
import promiseMiddleware from 'redux-promise';
import historyReducer from "./screens/history/historyReducer";



let middleWare = [thunkMiddleware, promiseMiddleware];

 // if (global.__DEV__) {
 //     const logger = createLogger({
 //          // predicate: (getState, action) => [LOAD_RIDES, ADD_RIDE].includes(action.type)
 //     });
 //     middleWare.push(logger);
 // }

export default () => (
    createStore(
        combineReducers({
            nav: navReducer,
            hackDetails: hackDetailsReducer,
            history: historyReducer,
        }),
        applyMiddleware(...middleWare)
    )
);
