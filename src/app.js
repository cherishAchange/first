/**
 * Created by taibowen on 2017/7/4.
 */
import React, {Component} from 'react';
import {ReactDOM,render} from 'react-dom';
import {Router, browserHistory} from 'react-router';
import Routes from './router.js';

class App extends Component {
    render(){
        return (
            <Router history={browserHistory} routes={Routes}/>
        );
    }
};

render(<App/>,document.getElementById('app'));