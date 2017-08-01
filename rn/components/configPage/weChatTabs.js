/**
 * Created by invictus- on 2017/2/28.
 */
import React, {Component} from 'react'
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image
} from 'react-native'
import resources from '../../common/commonResourses'

class weChatTabs extends Component {

    constructor() {
        super();
    }

    render() {
        return (
            <View>
                <View style={styles.line}/>
                <View style={styles.tabs}>
                    <TouchableOpacity onPress={() => this.props.goToPage(0)} style={styles.tab}>
                        <Image style={styles.img} resizeMode='contain'
                               source={this.props.activeTab === 0 ?
                           require('../../img/configPage/chatGreen.png'):
                           require('../../img/configPage/chat.png')}/>
                        <View style={styles.textView}>
                            <Text style={this.props.activeTab === 0 ? styles.textGreen: styles.text}>
                                微信
                            </Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.props.goToPage(1)} style={styles.tab}>
                        <Image style={styles.img} resizeMode='contain'
                               source={this.props.activeTab === 1 ?
                           require('../../img/configPage/contactsGreen.png'):
                           require('../../img/configPage/contacts.png')}/>
                        <View style={styles.textView}>
                            <Text style={this.props.activeTab === 1 ? styles.textGreen: styles.text}>
                                通讯录
                            </Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.props.goToPage(2)} style={styles.tab}>
                        <Image style={styles.img} resizeMode='contain'
                               source={this.props.activeTab === 2 ?
                           require('../../img/configPage/discoverGreen.png'):
                           require('../../img/configPage/discover.png')}/>
                        <View style={styles.textView}>
                            <Text style={this.props.activeTab === 2 ? styles.textGreen: styles.text}>
                                发现
                            </Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.props.goToPage(3)} style={styles.tab}>
                        <Image style={styles.img} resizeMode='contain'
                               source={this.props.activeTab === 3 ?
                           require('../../img/configPage/meGreen.png'):
                           require('../../img/configPage/me.png')}/>
                        <View style={styles.textView}>
                            <Text style={this.props.activeTab === 3 ? styles.textGreen: styles.text}>
                                我
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>);
    }
}

const styles = StyleSheet.create({
    line: {
        width: resources.screen.screenWidth,
        height: 0.5,
        backgroundColor: resources.colors.black,
        opacity: 0.2
    },
    tab: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    tabs: {
        height: 45,
        flexDirection: 'row',
        paddingTop: 5,
        borderWidth: 1,
        borderTopWidth: 0,
        borderLeftWidth: 0,
        borderRightWidth: 0,
        borderBottomColor: resources.colors.col_ef,
    },
    img: {
        width: 25,
        height: 23
    },
    textView: {
        flex: 1,
        justifyContent: 'flex-end'
    },
    textGreen: {
        fontSize: 10,
        color: resources.colors.green,
        marginBottom: 2
    },
    text: {
        fontSize: 10,
        color: resources.colors.gray,
        marginBottom: 2
    }
});

export default weChatTabs;
