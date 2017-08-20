/**
 * Created by taibowen on 2017/7/4.
 */
//workspace
import React, {Component} from 'react';
import {Link,Router} from 'react-router';
require('./index.scss');

class Workspace extends Component {
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div className="my-workspace">
                <div className="Header">
                    页头
                </div>
                <div className="body">
                    <div className="salid">
                        <ul>
                            <li><Link to="/you-date">我是日历导航</Link></li>
                            <li><Link to="/you-photo">我是照片圈导航</Link></li>
                            <li><Link to="/you-login-page">我是登录页面</Link></li>
                        </ul>
                    </div>
                    <div className="main">
                        {this.props.children}
                    </div>
                </div>
            </div>
        );
    }
}

export default Workspace;
