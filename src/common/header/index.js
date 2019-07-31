import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import { 
    HeaderWrapper, 
    Logo, 
    Nav, 
    NavItem, 
    SearchWrapper, 
    NavSearch, 
    Addition, 
    Button, 
    SearchInfo, 
    SearchInfoTitle,
    SearchInfoSwitch,
    SearchInfoList, 
    SearchInfoItem
 } from './style';
import { actionCreators } from './store';
import { actionCreators as loginActionCreators } from '../../pages/login/store';


//UI组件Header 负责页面渲染
class Header extends Component {
    
    render() {
        const { focused, list, handleFocus, handleBlur, login, logout } = this.props;
        return (
            <HeaderWrapper>
                <Link to='/'><Logo /></Link>
                <Nav>
                    <Link to='/'><NavItem className="left active">
                    <i className="iconfont">&#xe60c;</i>首页</NavItem></Link>
                    <NavItem className="left">
                    <i className="iconfont">&#xe791;</i>下载App</NavItem>
                    {
                        login? <NavItem className="right" onClick={logout}>退出</NavItem>
                        :<Link to='/login'><NavItem className="right">登录</NavItem></Link>
                    }
                    
                    <NavItem className="right">
                        <i className="iconfont">&#xe636;</i>
                    </NavItem>                    
                    <SearchWrapper>
                        <CSSTransition
                            in = {focused}
                            timeout={200}
                            classNames="slide"                        >
                            <NavSearch
                                className = {focused? 'focused': '' } 
                                onFocus={() => handleFocus(list)}
                                onBlur = {handleBlur}
                            >                                
                            </NavSearch>
                        </CSSTransition>
                        <i className={focused? 'focused iconfont zoom':'iconfont zoom'}>&#xe617;</i>
                        {this.getListArea()}
                    </SearchWrapper>
                </Nav>
                <Addition>
                    <Link to='/write'><Button className="writting">
                    <i className="iconfont">&#xe62d;</i>写文章</Button> </Link>
                    <Button className="reg" >注册</Button>
                </Addition>
            </HeaderWrapper> 
            )
    }

     getListArea() {
        const { focused, list, page, totalPage, mouseIn, handleMouseEnter, handleMouseLeave, handleChangePage } = this.props;
        const jsList = list.toJS();
        const pageList = [];
        if(jsList.length){
            for(let i=(page*10); i<(page+1)*10;i++) {
                pageList.push(
                    <SearchInfoItem key= {jsList[i]}>{jsList[i]}</SearchInfoItem>
                )
            }
        }
        if (focused || mouseIn) {
            return(
                <SearchInfo>
                    <SearchInfoTitle 
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    >
                        热门搜索
                        <SearchInfoSwitch 
                        onClick={() => handleChangePage(page, totalPage, this.spinIcon)}>
                             <i ref={(icon) => {this.spinIcon=icon}}className="iconfont spin">&#xe600;</i>
                             换一批
                        </SearchInfoSwitch>
                    </SearchInfoTitle>
                    <SearchInfoList>{ pageList }</SearchInfoList>
                </SearchInfo>
            );
        }
        else {
            return null;
        }
    }
}


//容器组件 两个方法 负责页面逻辑
const mapStateToProps = (state) => {
    return {
        focused: state.getIn(['header', 'focused']),//state和header都变成immutable对象
        list: state.getIn(['header', 'list']),
        page: state.getIn(['header', 'page']),
        totalPage: state.getIn(['header', 'totalPage']),
        mouseIn:  state.getIn(['header', 'mouseIn']),
        login: state.getIn(['login','login'])
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleFocus(list) {
            (list.size === 0)&&dispatch(actionCreators.getList());            
            dispatch(actionCreators.searchFocus());
        },
        handleBlur() {
            dispatch(actionCreators.searchBlur());
        },
        handleMouseEnter() {
            dispatch(actionCreators.mouseEnter());
        },
        handleMouseLeave() {
            dispatch(actionCreators.mouseLeave());
        },
        handleChangePage(page, totalPage, spin) {
            let originAngle = parseInt(spin.style.transform.replace(/[^0-9]/ig,''),10);
            spin.style.transform = 'rotate(' + (originAngle+360) +'deg)';
            if (page < totalPage-1) {
                dispatch(actionCreators.changePage(page + 1));
            }else {
                dispatch(actionCreators.changePage(0));
            }            
        },
        logout() {
            dispatch(loginActionCreators.logout());
        }
    }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(Header);