/**
 * Created by invictus- on 2017/2/28.
 */
import React, {Component} from 'react'
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity
} from 'react-native'
import resources from '../../common/commonResourses'
const scaleX = resources.screen.scaleX;
const scaleY = resources.screen.scaleY;

class whiteView extends Component {

    constructor() {
        super();
    }

    render() {
        let marginTop = {};
        marginTop.marginTop = this.props.marginTop;
        return (
            <TouchableOpacity onPress={this.props.onPress}>
            <View style={[styles.container, marginTop]}>
                <View style={styles.imgView}>
                    <Image style={styles.img} resizeMode='contain' source={this.props.image}/>
                    <Text style={styles.text}>{this.props.text}</Text>
                    <View style={styles.arrowView}>
                        <Image style={styles.arrow} resizeMode='contain'
                               source={require('../../img/common/arrowRight.png')}/>
                    </View>
                </View>
            </View>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        width: resources.screen.screenWidth,
        height: 40 * scaleY,
        backgroundColor: resources.colors.white
    },
    imgView: {
        width: resources.screen.screenWidth,
        height: 40 * scaleY,
        flexDirection: 'row',
        alignItems: 'center'
    },
    img: {
        width: 25 * scaleX,
        height: 25 * scaleY,
        marginLeft: 15 * scaleX
    },
    text: {
        marginLeft: 15 * scaleX,
        fontSize: 17
    },
    arrowView: {
        flex:1,
        alignItems: 'flex-end'
    },
    arrow: {
        width: 7 * scaleX,
        height: 13 * scaleY,
        marginRight: 15 * scaleX
    }
});

export default whiteView