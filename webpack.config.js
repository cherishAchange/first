/**
 * Created by taibowen on 2017/7/4.
 */

const path = require('path');

module.exports = {
    entry: {
        pageOne: "./src/app.js"//第一个页面
    },
    output: {
        "path": path.join(__dirname, "dist", 'js'),
        "filename": "my-first-project.bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loaders: ["babel-loader"],
                exclude: [path.join(__dirname, "node_modules", 'ts')]
            },
            {
                test: /\.scss$/,
                loaders: ["scss-loader"],
                exclude: [path.join(__dirname, "node_modules", 'ts')]
            },
            {
                test: /\.css$/,
                loaders: ["css-loader"],
                exclude: [path.join(__dirname, "node_modules", 'ts')]
            }
        ]
    },
    plugins: []
};