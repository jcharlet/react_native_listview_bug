import React from 'react';
import {TabBarTop, TabNavigator} from "react-navigation";
import HistoryContainer from "../../screens/history/HistoryContainer";
import * as globalStyles from "../../styles/global"
import HackDetailsContainer from "../../screens/hackDetails/HackDetailsContainer";

HackDetailsContainer.navigationOptions = {
    title: 'Ride details',
};

HistoryContainer.navigationOptions = {
    title: 'History',
};

export default BottomTabNavigator = TabNavigator({
    HackDetails: {screen: HackDetailsContainer},
    History: {screen: HistoryContainer},
}, {
    tabBarComponent:TabBarTop,
    tabBarPosition: 'bottom',
    tabBarOptions: {
        activeTintColor: globalStyles.WHITE,
        inactiveTintColor: globalStyles.GRAY,
        showIcon: true,
        // showLabel:true,
        style: globalStyles.COMMON_STYLES.footerStyle,
        tabStyle: {},
        indicatorStyle: globalStyles.COMMON_STYLES.footerIndicatorStyle,
        labelStyle: globalStyles.COMMON_STYLES.footerLabel,
    },
});
