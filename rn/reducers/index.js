/**
 * Created by invictus- on 2017/2/23.
 */

import {combineReducers} from 'redux';
import common from './common'

let MainReducer = combineReducers({
    common:common
});

module.exports = MainReducer;
