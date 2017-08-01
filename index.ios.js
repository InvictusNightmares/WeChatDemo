/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry
} from 'react-native';
import RootComponent from './rn/components/root'

export default class WechatProject extends Component {
  render() {
    return (
        <RootComponent component={this.props.component} param={this.props.param}/>
    )
  }
}

AppRegistry.registerComponent('WechatProject', () => WechatProject);
