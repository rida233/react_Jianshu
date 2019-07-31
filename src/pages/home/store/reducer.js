
import { fromJS } from 'immutable';

// immutable对象, 不可改变 
const defaultState = fromJS({
    topicList:[],
    articleList:[],
    recommendImg:[],
    showScroll: false
}
);

export default (state=defaultState, action) => {
    switch (action.type) {
        case 'change_home_data':
            return state.merge({
                topicList: fromJS(action.topicList),
                articleList: fromJS(action.articleList),
                recommendImg: fromJS(action.recommendImg)
            })        
        default: 
            return state;
    }// immutable对象的set方法会结合之前immutable对象的值和设置的值生成一个新的对象
}