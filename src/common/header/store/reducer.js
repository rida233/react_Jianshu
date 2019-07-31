import * as constants from './constants';
import { fromJS } from 'immutable';

// immutable对象, 不可改变 
const defaultState = fromJS({
    focused: false,
    mouseIn: false,
    list: [], //immutable数组
    page: 0,
    totalPage: 1
});

export default (state=defaultState, action) => {
    switch (action.type) {
        case constants.SEARCHFOCUS:
            return state.set('focused', true);
        case constants.SEARCHBLUR:
            return state.set('focused', false);
        case constants.MOUSEENTER:
            return state.set('mouseIn', true);
        case constants.MOUSELEAVE:
            return state.set('mouseIn', false);
        case constants.CHANGElIST:
            return state.merge({
                'list': action.data,
                'totalPage': action.totalPage
            })            
        case constants.CHANGEPAGE:
                return state.set('page', action.page);
        default: 
            return state;
    }// immutable对象的set方法会结合之前immutable对象的值和设置的值生成一个新的对象
}