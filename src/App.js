import React, { Component, Fragment } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import {GlobalStyled} from './style.js';
import {GlobalIcon} from './statics/iconfont/iconfont';
import Header from './common/header/index';
import store from './store/index';
import Home from './pages/home';
import Detail from './pages/detail/loadable';
import Login from './pages/login';
import Write from './pages/write';

class App extends Component {
    
    render() { 
        return ( 
            <Fragment>
                <GlobalStyled />
                <GlobalIcon />
                <Provider store={store}>
                    <BrowserRouter>
                        <Header />
                        <Route path='/' exact component={Home}></Route>
                        <Route path='/login' exact component={Login}></Route>
                        <Route path='/write' exact component={Write}></Route>
                        <Route path='/detail/:id' exact component={Detail}></Route>
                    </BrowserRouter>
                </Provider>
            </Fragment>
         );
    }
}
 
export default App;