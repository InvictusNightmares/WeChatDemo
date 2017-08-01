/**
 * Created by invictus- on 2017/2/23.
 */
import  ActionType from '../../constants/ActionType';
import {combineReducers} from 'redux';

function showLoadingView(state = false,action) {
    switch (action.type){
        case ActionType.SHOW_LOADING_VIEW:
            return true;
        case ActionType.DISMISS_LOADING_VIEW:
            return false;
        default:
            return state;
    }

}

let common=combineReducers({
    showLoadingView:showLoadingView
});

export default common;
