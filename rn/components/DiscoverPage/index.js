/**
 * Created by invictus- on 2017/3/1.
 */
import React, {Component} from 'react'
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    Image,
    TouchableOpacity
} from 'react-native'
import NavigationBar from '../common/navigationBar'
import resources from '../../common/commonResourses'
import WhiteView from '../common/whiteView'
import momentPage from './momentPage'
const scaleX = resources.screen.scaleX;
const scaleY = resources.screen.scaleY;

class DiscoverPage extends Component {

    constructor() {
        super();
    }

    _albumPress = () => {
        this.props.navigator.push({component: momentPage});
    };

    render() {
        return (
            <View>
                <NavigationBar navigator={this.props.navigator} title="发现"/>
                <ScrollView style={styles.container}>

                    <View style={styles.line1}/>
                    <WhiteView image={require('../../img/DiscoverPage/showAlbum.png')}
                               text="朋友圈" onPress={() => this._albumPress()}/>
                    <View style={styles.line}/>

                    <View style={styles.line3}/>
                    <View style={styles.view}>
                        <WhiteView image={require('../../img/DiscoverPage/scanQRCode.png')}
                                   text="扫一扫" onPress={() => this._albumPress()}/>
                        <View style={styles.line2}/>
                        <WhiteView image={require('../../img/DiscoverPage/shake.png')}
                                   text="摇一摇" onPress={() => this._albumPress()}/>
                    </View>
                    <View style={styles.line}/>

                    <View style={styles.line3}/>
                    <View style={styles.view}>
                        <WhiteView image={require('../../img/DiscoverPage/locationService.png')}
                                   text="附近的人" onPress={() => this._albumPress()}/>
                        <View style={styles.line2}/>
                        <WhiteView image={require('../../img/DiscoverPage/bottle.png')}
                                   text="漂流瓶" onPress={() => this._albumPress()}/>
                    </View>
                    <View style={styles.line}/>

                    <View style={styles.line3}/>
                    <View style={styles.view}>
                        <WhiteView image={require('../../img/DiscoverPage/shopping.png')}
                                   text="购物" onPress={() => this._albumPress()}/>
                        <View style={styles.line2}/>
                        <WhiteView image={require('../../img/DiscoverPage/game.png')}
                                   text="游戏" onPress={() => this._albumPress()}/>
                    </View>
                    <View style={styles.line}/>

                    <View style={styles.line3}/>
                    <WhiteView image={require('../../img/DiscoverPage/miniProgram.png')}
                               text="小程序" onPress={() => this._albumPress()}/>
                    <View style={styles.line}/>
                </ScrollView>
            </View>)
    }

}

const styles = StyleSheet.create({
    container: {
        width: resources.screen.screenWidth,
        height: resources.screen.screenHeight,
        backgroundColor: resources.colors.col_ef
    },
    line: {
        width: resources.screen.screenWidth,
        height: 0.5,
        backgroundColor: resources.colors.black,
        opacity: 0.2,
    },
    line1: {
        width: resources.screen.screenWidth,
        height: 0.5,
        backgroundColor: resources.colors.black,
        opacity: 0.2,
        marginTop: 10 * scaleY
    },
    line2: {
        width: resources.screen.screenWidth - 15 * scaleX,
        marginLeft: 15 * scaleX,
        height: 0.5,
        backgroundColor: resources.colors.black,
        opacity: 0.2,
    },
    line3: {
        width: resources.screen.screenWidth,
        height: 0.5,
        backgroundColor: resources.colors.black,
        opacity: 0.2,
        marginTop: 15 * scaleY
    },
    view: {
        backgroundColor: resources.colors.white
    }
});

export default DiscoverPage