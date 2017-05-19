import React, {Component} from 'react';
import {
    Text,
    View,
    Image,
    TouchableOpacity,
} from 'react-native';
import * as globalStyles from '../../styles/global';
import * as PropTypes from "react/lib/ReactPropTypes";
import * as utils from "../../util/utils";


export default class HackDetailsScreen extends Component {

    constructor(props) {
        super(props);
        this.props.init();
    }

    renderBrowsingButton(side) {
        switch (side) {
            case "LEFT":
                if (this.props.hasPreviousRide(this.props.hackDetails.index, this.props.hackDetails.rides.length)) {
                    return (
                        <TouchableOpacity activeOpacity={globalStyles.ACTIVE_OPACITY}
                                          onPress={this.props.showPreviousRide}

                                          style={{
                                  width:50
                     }}>
                            <Image source={require('../../../img/ic_navigate_prev_green.png')}
                            />
                        </TouchableOpacity>);
                }
                break;
            case "RIGHT":
                if (this.props.hasNextRide(this.props.hackDetails.index, this.props.hackDetails.rides.length)) {
                    return (
                        <TouchableOpacity activeOpacity={globalStyles.ACTIVE_OPACITY}
                                          onPress={this.props.showNextRide}

                                          style={{
                                  width:50
                     }}>
                            <Image source={require('../../../img/ic_navigate_next_green.png')}
                            />
                        </TouchableOpacity>);
                }
        }
        return <View style={{width:50}}><Text> </Text></View>;
    }

    renderHackBrowserTopBar() {
        let ride = this.props.hackDetails.rides[this.props.hackDetails.index];
        let date = utils.formatDateToDisplay(ride.date);
        let time = utils.formatTimeToDisplay(ride.date);
        return (
            <View style={{
                flex:0,
                flexDirection:"row",
                justifyContent: 'space-between',
                alignItems: 'flex-start',
            }}>
                {this.renderBrowsingButton("LEFT")}
                <View style={{
                    flexGrow:2,
                    flex:1,
                flexDirection:"column",
                        height:50,
                        margin:5
                }}>
                    <Text style={{
                        textAlign: 'center',
                        textAlignVertical: 'center',
        fontSize: 22,
        fontWeight:'500',
        fontVariant: ['small-caps'],
        color: globalStyles.GREEN,
                     }}>
                        {date}
                    </Text>
                    <Text style={{
                        textAlign: 'center',
                        textAlignVertical: 'center',
        fontSize: 16,
        color: globalStyles.GREEN,
                     }}>
                        {time}
                    </Text>
                </View>
                {this.renderBrowsingButton("RIGHT")}
            </View>
        )
    }

    render() {
        if (this.props.hackDetails.rides && this.props.hackDetails.rides.length > 0) {
            return (
                <View style={{flex: 1,alignItems: 'stretch'}}>
                    {this.renderHackBrowserTopBar()}
                    <View style={globalStyles.COMMON_STYLES.container}>

                        <TouchableOpacity style={[globalStyles.COMMON_STYLES.centeredElement,
                    ]} activeOpacity={globalStyles.ACTIVE_OPACITY}
                                          onPress={() => {this.props.remove(this.props.hackDetails.rides[this.props.hackDetails.index].date,this.props.hackDetails.rides[this.props.hackDetails.index].analytics.distance)}}>

                            <View style={[globalStyles.COMMON_STYLES.buttonView,globalStyles.COMMON_STYLES.redButton]}>
                                <Text style={[globalStyles.COMMON_STYLES.buttonText]}>Remove</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>

            );
        }
        return (
        <View style={{flex: 1,alignItems: 'stretch'}}>
            <View style={[globalStyles.COMMON_STYLES.container,{

                    flex:1,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',

            }]}>
                <Text
                    style={[globalStyles.COMMON_STYLES.fontSizeLarge,{
                    textAlign:"center",
        padding: 20,
        color: globalStyles.GREEN,
      }]}
                >No hack recorded</Text>
            </View>
        </View>
        );
    }
}

HackDetailsScreen.propTypes = {
    hackDetails: PropTypes.any,
    showPreviousRide: PropTypes.func,
    showNextRide: PropTypes.func,
    hasPreviousRide: PropTypes.func,
    hasNextRide: PropTypes.func,
    remove: PropTypes.func,
};
