/**
 * Created by invictus- on 2017/2/28.
 */

const Dimensions = require('Dimensions');
const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;
const scaleX = screenWidth / 375.0;
const scaleY = screenHeight / 667.0;
const fontDisparity = 3; //text的fontSize一般要略小于height的差值。
const CommonResources = {
    colors: {
        white: '#ffffff',
        black: '#000000',
        col_ef: '#efeff4',
        green: '#32CD32',
        gray: '#8A8A8A',
        nameBlue: '#95a3bf',
        commentGray: '#3C3C4B',
        commentWhite: '#F0F0F5'
    },
    screen: {
        scaleX: scaleX,
        scaleY: scaleY,
        screenHeight: screenHeight,
        screenWidth: screenWidth,
        fontDisparity:fontDisparity,
    }
};

export default CommonResources;
