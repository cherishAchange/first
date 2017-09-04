/**
 * Created by taibowen on 2017/7/4.
 */
//在这里引入workspace和所有的组件
import React from 'react';
import Workspace from './index';
import Date from './components/date/index.js';
import Photo from './components/photo/index.js';
import Login from './components/login/index.js';

const Routes = [
    {
        path: "/",
        component: Workspace,
        childRoutes: [
            {
                path: "you-date",
                component: Date
            },
            {
                path: "you-photo",
                component: Photo
            },
            {
                path: "you-login-page",
                component: Login
            }
        ]
    }
];

export default Routes;