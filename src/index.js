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
                    <h4>页头,下面的li根据authorMenu动态生成，以达到控制页面的权限</h4>
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
