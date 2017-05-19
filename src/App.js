import React, {Component} from 'react';
import {AppRegistry} from 'react-native';
import {
    Provider,
} from 'react-redux';
import createStore from "./store";
import BottomTabNavContainer from "./navigation/bottomBar/BottomTabNavContainer";


export default class App extends Component {
    store = createStore();

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Provider store={this.store}>
                <BottomTabNavContainer/>
            </Provider>
        );
    }
}

AppRegistry.registerComponent('BugListViewProject', () => App);
