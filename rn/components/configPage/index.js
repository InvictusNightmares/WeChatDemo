/**
 * Created by invictus- on 2017/2/23.
 */

import React, {Component} from 'react'
import {
    View,
    Text,
    StyleSheet,
    ScrollView
} from 'react-native'
import ScrollableTabView from 'react-native-scrollable-tab-view'
import MePage from '../MePage/index'
import DiscoverPage from '../DiscoverPage/index'
import WeChatTabs from './weChatTabs'


class configPage extends Component {

    constructor() {
        super();
    }

    render() {
        return (
            <ScrollableTabView tabBarPosition='bottom' renderTabBar={() => <WeChatTabs/>}>
                <MePage/>
                <MePage/>
                <DiscoverPage navigator={this.props.navigator}/>
                <MePage navigator={this.props.navigator}/>
            </ScrollableTabView>);
    }
}

export default configPage;