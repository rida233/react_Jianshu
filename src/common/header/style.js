import styled from 'styled-components';
import logPic from '../../statics/logo.png';
import Recommend from '../../pages/home/components/Recommend';

export const HeaderWrapper = styled.div`
    z-index: 1;
    position: relative;
    height: 56px;
    border-bottom: 1px solid #f0f0f0;
`;

export const Logo = styled.div`
    display: block;
    height: 56px;
    width: 100px;
    position: absolute;
    top: 0;
    left: 60px;    
    background-image: url(${logPic});
    background-size: contain;
`;

export const Nav = styled.div`
    width: 960px;
    height: 100%;
    margin: 0 auto;
`;

export const NavItem = styled.div`
    height: 56px;    
    line-height: 56px;
    padding: 0 15px;
    font-size: 17px;
    color: #333;
    &.left {
        float: left;
    }
    &.right {
        float: right;
        color: #969696;
    }
    &.active {
        color: #ea6f5a;
    }
    i {
        margin-right: 5px;    
    }
`;

export const SearchWrapper = styled.div`
    float: left;
    position: relative;
    
    .zoom {
        position: absolute;
        right: 5px;
        bottom: 5px;
        width: 30px;
        line-height: 30px;
        text-align: center;   
        color: #777;   
        font-size: 18px;  
        &.focused {
            background-color: #888;
            color: #fff;
            border-radius: 50%;
        }
    }
`;

export const NavSearch = styled.input.attrs({
    placeholder: '搜索'
})`
    width: 160px;
    height: 38px;
    padding: 0 30px 0 20px;
    margin-top: 9px;
    margin-left: 20px;
    box-sizing: border-box;
    border: none;
    outline: none;
    background-color: #eee;
    border-radius: 19px;
    font-size: 14px;
    color: #666;
    &.focused {
        width: 300px;
    }
    &.slide-enter {
        transition: all .2s ease-out;
    }
    &.slide-enter-active {
        width: 300px;
    }
    &.slide-exit {
        transition: all .2s ease-out;
    }
    &.slide-exit-active {
        width: 160px;
    }
`;

export const Addition = styled.div`
    position: absolute;
    right: 0;
    top: 0;
    height: 56px;    
`;

export const Button = styled.button`
    font-size: 14px;
    float: right;
    line-height: 38px;
    border-radius: 19px;
    padding: 0px 20px;
    margin-top: 9px;
    margin-right: 20px;
    border: 1px solid #ec6149;
    &.reg {
        background-color: #fff;
        color: #ec6149;
    }
    &.writting {
        background-color: #ec6149;
        color: #fff;
    }
`;

export const SearchInfo = styled.div`
    position: absolute;
    left: 0;
    top: 56px;
    margin-left:20px;
    width: 200px;
    padding: 0 20px;   
    box-shadow: 0 0 8px rgba(0, 0, 0, .2);
    background: #fff;
`;

export const SearchInfoTitle = styled.div`
    margin-top: 20px;
    margin-bottom: 15px;
    line-height: 20px;
    font-size: 14px;
    color: #969696;
`;

export const SearchInfoSwitch = styled.span`
    float: right;
    font-size: 13px;
    color: #969696;
    cursor: pointer;
    .spin {
        display: block;
        float: left;
        font-size: 12px;
        margin-right: 2px;
        transition: all .2s ease-in;
        transform: rotate(0deg);
        transform-origin: center center;
    }
`;
export const SearchInfoList = styled.div`
    overflow: hidden;
`;

export const SearchInfoItem = styled.a`
    float: left;
    display: block;
    font-size: 11px;
    color: #969696;
    margin-left:10px;
    margin-bottom:15px;
    line-height: 20px;
    padding: 0 5px;
    border: 1px solid #ddd;
    border-radius: 2px;
`;
