/**
 * Created by taibowen on 2017/7/4.
 */
import React, {Component} from 'react';
import _ from 'lodash';
import './index.css';

class Date extends Component {
    constructor(props){
        super(props);
        this.state = {
            dayOne: new Date().getDay()
        }
    }
    componentDidMount(){

    }
    createTag(){
        let arr = [];
        for(let i=0; i<42; i++){
            arr.push(<li key={i}>{i}</li>);
        }
        return arr;
    }
    render(){
        return (
            <div className="date-show">
                <h1 className="title">日历</h1>
                <div className='haha'>
                    <div className='ny'>
                        <span className='Left'><strong>{"<"}</strong></span>
                        <span className='mid'></span>
                        <span className='Right'><strong>></strong></span>
                    </div>
                    <ul className='week'>
                        <li><strong>一</strong></li>
                        <li><strong>二</strong></li>
                        <li><strong>三</strong></li>
                        <li><strong>四</strong></li>
                        <li><strong>五</strong></li>
                        <li><strong>六</strong></li>
                        <li><strong>日</strong></li>
                    </ul>
                    <ul className='day'>
                        {this.createTag()}
                    </ul>
                </div>
            </div>
        );
    }
}

export default Date;