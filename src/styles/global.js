import {createStyles, maxHeight } from 'react-native-media-queries'
export const ACTIVE_OPACITY = 0.6;

export const RED = '#e54242';
export const GREEN = '#619b64';
export const WHITE = 'white';
export const GRAY = '#d9d9d9';


const base ={
    fontSizeLarge:{
      fontSize:20
    },
    fontSizeNormal:{
      fontSize:16
    },
    fontSizeSmall:{
      fontSize:12
    },

    main: {
        flex: 1,
        backgroundColor: WHITE,
        flexDirection: 'column',
    },

    headerText: {
        color: WHITE,
          fontSize: 25,
    },


    container: {
        flex: 1,
        justifyContent: 'space-around',
        flexDirection: 'column',
        alignItems: 'flex-start'
    },


    infoBoxArrow: {
        alignSelf: 'center',
        width: 15,
        height: 30,
    },





    centeredElement: {
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'center',
    },

    buttonView: {
        flexGrow: 0,
        flexDirection: 'row',
        alignItems: 'stretch',
        margin: 7,
        padding: 7,
    },
    redButton: {

        borderStyle: 'solid',
        borderWidth: 2,
        borderColor: RED,
        backgroundColor: RED
    },
    buttonText: {

        fontSize: 15,
        textAlign: 'center',
        color: WHITE,
    },

    footerLabel : {
          margin: 4,
          marginBottom: 0,
          fontSize: 12,
    },
    footerStyle:{
        backgroundColor: GREEN,
        paddingBottom: 0,
    },
    footerIndicatorStyle:{
        backgroundColor: WHITE,
        height: 4,
    }

};


export const COMMON_STYLES = createStyles(
  base,
  //iphone 5s
  maxHeight(650,{
    headerText:{
      fontSize:20
    },
    fontSizeLarge:{
      fontSize:18
    },
    fontSizeNormal:{
      fontSize:14
    },
    fontSizeSmall:{
      fontSize:10
    },
  }),
  // iphone 6
)
