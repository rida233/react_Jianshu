import { fromJS } from 'immutable';
import * as constants from './constants';

// immutable对象, 不可改变 
const defaultState = fromJS({
    title:'',
    content:''
}
);

export default (state=defaultState, action) => {
    switch (action.type) {
        case constants.CHANGE_DETAIL :
            return state.merge({
                title: action.title,
                content: action.content
            })
        default: 
            return state;
    }// immutable对象的set方法会结合之前immutable对象的值和设置的值生成一个新的对象
}