/**
 * Created by taibowen on 2017/7/4.
 */
import React from 'react';
import {findDOMNode} from 'react-dom';
import {Link} from 'react-router';
import './index.scss';

class Photo extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            value : '',
            world_1: '',
            world_2: '',
            world_3: '',
            world_4: ''
        };
        this._clickHandle = this._clickHandle.bind(this);
        this._focus = this._focus.bind(this);
        this._keyDown = this._keyDown.bind(this);
        this._blur = this._blur.bind(this);
    }

    _clickHandle(e){
        this.setState({
            value: this.input.value
        });
    }

    _keyDown(e){
        let {value} = this.state;
        switch (e.keyCode){
            case 49:
            this.setState({world_1: value, value: ''},() => {
                this._input.removeEventListener('input', this._clickHandle, false);
            });
                break;
            case 50:
            this.setState({world_2: value, value: ''},() => {
                this._input.removeEventListener('input', this._clickHandle, false);
            });
                break;
            case 51:
            this.setState({world_3: value, value: ''},() => {
                this._input.removeEventListener('input', this._clickHandle, false);
            });
                break;
            case 52:
            this.setState({world_4: value, value: ''},() => {
                this._input.removeEventListener('input', this._clickHandle, false);
            });
                break;
                default:
                this._input.addEventListener('input', this._clickHandle, false);
        }
    }

    _focus(e){
        document.addEventListener('keydown', this._keyDown, false);
        this._input = findDOMNode(this.input);
        this._input.addEventListener('input', this._clickHandle, false);
    }

    _blur(){
        document.removeEventListener('keydown', this._keyDown, false);
    }

    render(){
        let {value, world_1, world_2, world_3, world_4} = this.state;
        return (
            <div className="photo-show">
                <div className='single'><p className='world'>{world_1}</p><span className='actually-single actually-single0'></span></div>
                <div className='single'><p className='world'>{world_2}</p><span className='actually-single actually-single1'></span></div>
                <div className='single'><p className='world'>{world_3}</p><span className='actually-single actually-single2'></span></div>
                <div className='single'><p className='world'>{world_4}</p><span className='actually-single actually-single3'></span></div>
                照片展示组件
                <input 
                    className='input'
                    ref={(target) => {this.input = target}} 
                    value = {value}
                    onFocus={this._focus}
                    onBlur={this._blur}
                    />
            </div>
        );
    }
}

export default Photo;