/**
 * Created by invictus- on 2017/2/23.
 */
import React, {Component} from 'react';
import {Provider} from 'react-redux';
import Navigation from './common/navigation'
import store from '../store/configStore';
import configPage from './configPage'
import test from './common/test'

class RootComponent extends Component {

    constructor() {
        super();
        this.state = {store: store};
    }

    render() {
        let param = this.props.param;
        return (
            <Provider store={this.state.store}>
                <Navigation initialRoute={{component: configPage, param: param}}/>
            </Provider>
        );
    }
}

export default RootComponent;
