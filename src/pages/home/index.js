import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HomeWrapper, HomeLeft, HomeRight } from './style'; 
import  Topic  from './components/Topic';
import List from './components/List';
import Recommend from './components/Recommend';
import { BackTop } from './style';
import axios from 'axios';

class Home extends Component {
    
    handleScrollTop() {
        window.scrollTo(0,0);
    }
    render() { 
        return (  
            <HomeWrapper>
                <HomeLeft>
                    <img className="banner-img" src="https://upload.jianshu.io/admin_banners/web_images/4681/399c05119c11ec982afaf3cb352ad313ed75cfeb.png?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540"/>
                    <Topic></Topic>
                    <List></List>
                </HomeLeft>
                <HomeRight>
                    <Recommend></Recommend>
                </HomeRight>
                {this.props.showScroll?<BackTop onClick={this.handleScrollTop}> 回到顶部</BackTop>:null}
                
            </HomeWrapper>
        );
    }
    componentDidMount(){
        this.props.changeHomeData();
        this.bindEvents();
    }
    bindEvents() {
        window.addEventListener('scroll',this.props.changeScrollTopShow)
    }
}
const mapStateToProps = (state) => ({
    showScroll: state.getIn(['home','showScroll'])
})
const mapToDispatch = (dispatch) => ({
    changeHomeData() {
        axios.get('/api/home.json').then((res)=>{
            const result = res.data.data;
            const action = {
                type: 'change_home_data',
                topicList: result.topicList,
                articleList: result.articleList,
                recommendImg: result.recommendImg
            }
        dispatch(action);
    })},
    changeScrollTopShow() {
        if(document.documentElement.scrollTop>400) {
            
        }
        console.log(document.documentElement.scrollTop);
}
})
export default connect(mapStateToProps,mapToDispatch)(Home);