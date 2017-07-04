/**
 * Created by taibowen on 2017/7/4.
 */
//workspace
import React, {Component} from 'react';
import {Link,Router} from 'react-router';
require('./index.css');

class Workspace extends Component {
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div>
                <div id="Header">
                    页头
                </div>
                <div id="body">
                    <div id="salid">
                        <ul>
                            <li><Link to="/you-date">我是日历导航</Link></li>
                            <li><Link to="/you-photo">我是照片圈导航</Link></li>
                        </ul>
                    </div>
                    <div id="main">
                        {this.props.children}
                    </div>
                </div>
            </div>
        );
    }
}

export default Workspace;
