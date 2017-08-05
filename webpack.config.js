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
        "filename": "bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loaders: ["babel-loader"],
                exclude: [path.join(__dirname, "node_modules", 'js')]
            },
            {
                test: /\.scss$/,
                loaders: ["style-loader","css-loader","sass-loader"],
                exclude: [path.join(__dirname, "node_modules", 'scss')]
            },
            {
                test: /\.css$/,
                loaders: ["style-loader", "css-loader"],
                exclude: [path.join(__dirname, "node_modules", 'css')]
            }
        ]
    },
    plugins: []
};