import React,{Component} from 'react';
import {ajax} from '../../utils/index.js';

class Login extends Component {

    constructor(props){
        super(props);
        this.input = {
            input1: null,
            input2: null
        };
        this.submit = this.submit.bind(this);  //绑定this
    }

    submit(e){
        if(this.input.input1.value && this.input.input2.value){
            let obj = {
                "name": this.input.input1.value,
                "password": this.input.input2.value 
            }
            let data = ajax("/api/login", obj, 'POST');
            console.log(data);
        }
    }

    render(){
        return (
            <div>
                <h1>我是登录页面</h1>
                <div>
                    <form>
                        <input type='text' ref={(target) => {this.input.input1 = target}}/>
                        <input type='text' ref={(target) => {this.input.input2 = target}}/>
                        <button type="button" onClick={this.submit}>登录</button>
                    </form>
                </div>
            </div>
        );
    }

}

export default Login;