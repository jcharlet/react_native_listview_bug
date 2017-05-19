import React, {Component} from 'react';
import {
    Text,
    View,
    Image,
    TouchableOpacity,
    ListView
} from 'react-native';
import * as globalStyles from '../../styles/global';
import * as PropTypes from "react/lib/ReactPropTypes";
import * as utils from "../../util/utils";


export default class HistoryScreen extends Component {

    state = {
        dataSource: {},
    };

    constructor(props) {
        super(props);
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        // this.state.dataSource=ds.cloneWithRows(['row 1', 'row 2'];
        this.state.dataSource = ds.cloneWithRows(this.props.history.rides);
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            dataSource: this.state.dataSource.cloneWithRows(nextProps.history.rides),
        });
    }

    _navigate(index) {
        this.props.navigateToHackDetails(index);
    }

    renderRow(rowData, ...rest) {
        let index = parseInt(rest[1], 10);
        index = this.props.history.rides.length-index-1;
        return (
            <TouchableOpacity style={{
                flex:1,
                flexDirection:'row',
                justifyContent: 'space-between',
                marginTop:5,
                marginBottom:5,
                paddingTop:5,
                paddingBottom:5,
                paddingLeft:20,
                paddingRight:20,
                backgroundColor: globalStyles.GRAY,
            }} activeOpacity={globalStyles.ACTIVE_OPACITY}
                              onPress={() => this._navigate(index)}>
                <View style={{
                    flex:1.1,
                    flexDirection:'row',
        justifyContent: 'space-between',
        marginRight:20,
            }}>
                    <Text style={[globalStyles.COMMON_STYLES.fontSizeNormal,{
                        alignSelf:'center',
                    }]}>{utils.formatDateToDisplay(rowData.date)}</Text>
                    <Text style={[globalStyles.COMMON_STYLES.fontSizeSmall,{
                        alignSelf:'flex-end',
                    }]}>{utils.formatTimeToDisplay(rowData.date)}</Text>
                </View>


                <View><Image source={require('../../../img/ic_navigate_next_green.png')}
                             style={globalStyles.COMMON_STYLES.infoBoxArrow}/>
                </View>

            </TouchableOpacity>

        );
    }

    render() {
        if (this.props.history.rides && this.props.history.rides.length > 0) {
            return (

                <View style={{flex: 1,alignItems: 'stretch',}}>
                    <View style={[globalStyles.COMMON_STYLES.container,{
                        alignItems: 'stretch',
                        flex:1,
                        marginTop:5,
                        marginBottom:5,
                        }]}>

                        <ListView
                            enableEmptySections
                            dataSource={this.state.dataSource}
                            renderRow={this.renderRow.bind(this)}
                        />
                    </View>
                </View>
            );
        }
        return (
        <View style={{flex: 1,alignItems: 'stretch',}}>
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
        //borderStyle: 'solid',
        //borderColor: 'red',
        //borderWidth: 1
      }]}
                >No hack recorded</Text>
            </View>
        </View>
        );
    }

}

HistoryScreen.navigationOptions = {
    title: 'History',
};
HistoryScreen.propTypes = {
    history: PropTypes.any,
    navigateToHackDetails: PropTypes.func,
};
