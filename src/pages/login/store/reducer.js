
import { fromJS } from 'immutable';
import { constants } from '.';

// immutable对象, 不可改变 
const defaultState = fromJS({
    login: false
});

export default (state=defaultState, action) => {
    switch (action.type) {
        case constants.CHANGE_LOGIN:
            return state.set('login',action.value)
        case constants.CHANGE_LOGOUT:
            return state.set('login',action.value)
        default: 
            return state;
    }// immutable对象的set方法会结合之前immutable对象的值和设置的值生成一个新的对象
}