/**
 * Created by taibowen on 2017/7/4.
 */
import React from 'react'
import {Link} from 'react-router'

class Photo extends React.Component {

    constructor(props){
        super(props);
    }

    _clickHandle(){
        let tarA = document.createElement('a');
        tarA.href = `export/photo?params=${110}`;
        tarA.download = '1.txt';
        this.button.appendChild(tarA);
        tarA.click();
        this.button.removeChild(tarA);
    }

    render(){
        return (
            <div className="photo-show">
                照片展示组件
                <button ref={(target) => {this.button = target}} onClick={this._clickHandle.bind(this)}>下载图片</button>
            </div>
        );
    }
}

export default Photo;