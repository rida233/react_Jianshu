import * as constants from './constants';
import axios from 'axios';
import { fromJS } from 'immutable';

const changelist = (data) => ({
    type: constants.CHANGElIST,
    data: fromJS(data),
    totalPage: Math.ceil(data.length/10)
})

export const searchFocus= () => ({
    type: constants.SEARCHFOCUS
});
export const searchBlur = () => ({
    type: constants.SEARCHBLUR
});//返回一个对象用()
export const mouseEnter = () => ({
    type: constants.MOUSEENTER
})
export const mouseLeave = () => ({
    type: constants.MOUSELEAVE
})
export const changePage = (page) => ({
    type: constants.CHANGEPAGE,
    page
})

export const getList = () => {
    return (dispatch) => {
        axios.get('/api/headerList.json').then((res) => {
            const data = res.data;
            dispatch(changelist(data.data));
        }).catch( () => {
            console.log('error');
        })
    }

};//返回一个函数用{} 这就是redux-thunk的意义 