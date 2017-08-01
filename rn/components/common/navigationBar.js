/**
 * Created by invictus- on 2017/2/23.
 */

import React, {Component} from 'react'
import {
    View,
    TouchableOpacity,
    Image,
    Text,
    StyleSheet
} from 'react-native'
import resources from '../../common/commonResourses'

class NavigationBar extends Component {

    _leftButtonHandler() {
        let routers;
        const nav = this.props.navigator;
        if (nav) {
            routers = nav.getCurrentRoutes();
        }
        if (this.props.leftNavBtnClick) {
            this.props.leftNavBtnClick();
        } else {
            if (nav) {
                if (routers.length > 1) {
                    nav.pop();
                }
            }
        }
    }

    _rightButtonHandler = () => {
        if (this.props.rightNavBtnClick) {
            this.props.rightNavBtnClick();
        }
    };

    render() {
        return (
            <View>
                <View style={styles.statusBar}/>
                <View style={styles.navBar}>
                    <TouchableOpacity style={{marginLeft:15,justifyContent:'center',flexDirection:'row',alignItems:'center'}}
                                      onPress={() => this._leftButtonHandler()}>
                        <Image style={{width:20,height:20}} source={this.props.leftImg}
                               resizeMode='contain'/>
                        <Text style={styles.text}>{this.props.leftText}</Text>
                    </TouchableOpacity>
                    <View style={styles.titleContainer}>
                        <Text style={styles.title}>{this.props.title}</Text>
                    </View>
                    <TouchableOpacity style={styles.rightBtn} onPress={() => this._rightButtonHandler()}>
                        <Image style={{width:27,height:33}} source={this.props.rightImg}/>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    navBar: {
        height: 44,
        flexDirection: 'row',
        backgroundColor: 'rgba(0,0,0,0.8)',
    },
    statusBar: {
        height: 20,
        backgroundColor: 'rgba(0,0,0,0.8)',
    },
    titleContainer: {
        position: 'absolute',
        left: 100,
        right: 100,
        top: 0,
        bottom: 0,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontSize: 18,
        letterSpacing: 0.5,
        color: resources.colors.white,
        fontWeight: '500'
    },
    rightBtn: {
        marginRight: 15,
        justifyContent: 'center',
        position: 'absolute',
        right: 15,
        top: 0,
        bottom: 0
    },
    text: {
        fontSize: 16,
        color: resources.colors.white
    }
});

export default NavigationBar;
