/**
 * Created by invictus- on 2017/2/27.
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
const scaleX = resources.screen.scaleX;
const scaleY = resources.screen.scaleY;

class MePage extends Component {

    constructor() {
        super();
    }

    _albumPress = () => {

    };

    render() {
        return (
            <View>
                <NavigationBar navigator={this.props.navigator} title="我"/>
                <ScrollView style={styles.container}>

                    <View style={styles.line1}/>
                    <TouchableOpacity onPress={() => this._albumPress()}>
                        <View style={styles.photoView}>
                            <Image style={styles.meImg} source={require('../../img/MePage/me.png')}/>
                            <View>
                                <Text style={styles.text}>Invictus-</Text>
                                <View style={styles.nameView}>
                                    <Text style={styles.text}>微信号:</Text>
                                    <Text style={styles.nameText}>ZC732205017</Text>
                                </View>
                            </View>
                            <View style={styles.arrowView}>
                                <Image style={styles.myQR} resizeMode='contain'
                                       source={require('../../img/MePage/myQR.png')}/>
                                <Image style={styles.arrow} resizeMode='contain'
                                       source={require('../../img/common/arrowRight.png')}/>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <View style={styles.line}/>

                    <View style={styles.line3}/>
                    <View style={styles.view}>
                        <WhiteView image={require('../../img/MePage/album.png')}
                                   text="相册" onPress={() => this._albumPress()}/>
                        <View style={styles.line2}/>
                        <WhiteView image={require('../../img/MePage/favorites.png')}
                                   text="收藏"/>
                        <View style={styles.line2}/>
                        <WhiteView image={require('../../img/MePage/wallet.png')}
                                   text="钱包"/>
                        <View style={styles.line2}/>
                        <WhiteView image={require('../../img/MePage/bankCard.png')}
                                   text="卡包"/>
                        <View style={styles.line}/>
                    </View>


                    <View style={styles.line3}/>
                    <WhiteView image={require('../../img/MePage/emoji.png')}
                               text="表情"/>
                    <View style={styles.line}/>

                    <View style={styles.line3}/>
                    <WhiteView image={require('../../img/MePage/setting.png')}
                               text="设置"/>
                    <View style={styles.line}/>

                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        width: resources.screen.screenWidth,
        height: resources.screen.screenHeight,
        backgroundColor: resources.colors.col_ef
    },

    photoView: {
        width: resources.screen.screenWidth,
        height: 80 * scaleY,
        backgroundColor: resources.colors.white,
        flexDirection: 'row',
        alignItems: 'center'
    },
    meImg: {
        width: 60 * scaleX,
        height: 60 * scaleY,
        marginLeft: 15 * scaleX,
        borderRadius: 4
    },
    text: {
        marginLeft: 15 * scaleX,
        fontSize: 14
    },
    nameText: {
        marginLeft: 5 * scaleX,
        fontSize: 14
    },
    nameView: {
        flexDirection: 'row',
        marginTop: 10 * scaleY
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
    },
    arrowView: {
        flex: 1,
        alignItems: 'flex-end',
        flexDirection: 'row',
        justifyContent: 'flex-end'
    },
    arrow: {
        width: 7 * scaleX,
        height: 13 * scaleY,
        marginRight: 15 * scaleX
    },
    myQR: {
        width: 13 * scaleX,
        height: 13 * scaleY,
        marginRight: 10 * scaleX
    }
});

export default MePage
