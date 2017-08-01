/**
 * Created by invictus- on 2017/2/23.
 */

import { createStore } from 'redux';
import MainReducer from '../reducers';

let store = createStore(MainReducer);

export default store;