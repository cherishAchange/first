/**
 * Created by taibowen on 2017/7/27.
 */
/**
 * 每次触发input事件都会重新定义一个value变量，并赋予当前输入的值，但是这个value的值并不会在setInterval启动时实时的传入,
 * setInterval中的value值实际是setInterval上一次运行时保留的值
 * 这里的value和setInterval里的不是一个值
 * */
function search_box() {
    let {clickRoleItem} = this.state, self = this, value = self.search_Box.value;
    if (!this.timer) {
        this.timer = setInterval(async function () {
            if (value === self.search_Box.value) {
                clearInterval(self.timer);
                self.timer = null;
                console.log('输入完成');
            } else {
                value = self.search_Box.value;   //记录下当前输入的值
                console.log(value);
                console.log('正在输入')
            }
        }, 1000);   //定时器的时间间隔需要普遍大于用户输入下一个字符的时间间隔
    }
}

function render(){
    return (
        <input onInput={this.search_box}/>
    );
}
