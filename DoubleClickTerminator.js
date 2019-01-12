/* 
 * 双击终结者【防止按钮、cell等控件多次触发，也可以防止多次网络请求等误触发的多次动作】
 * @Author: Rephontil.Zhou 
 * @Date: 2019-01-11 19:09:47 
 * @Last Modified by: Rephontil.Zhou
 * @Last Modified time: 2019-01-12 10:20:48
 */

 
var DoubleClickTerminator = {

    /**
     * 存放定时器的字典
     */
    timerMap: null,

    init: function () {

        this.timerMap = new Map();
    },

    /**
     * 动作是否允许
     * @param {操作对象,可以传this或Node等任何非空对象} target 
     * @param {延时时间,默认500ms} delayDuration
     * @param 返回 true允许操作 or false不允许操作 
     */
    actionAllowable: function (target, delayDuration = 500) {
        
        if (!this.timerMap.size) {
            let timer = setTimeout(() => {
                clearTimeout(timer);
                timer = null;
                this.timerMap.delete(target);

            }, delayDuration);
            this.timerMap.set(target, timer);

            return true;
        }

        let targetInstance = this.timerMap.get(target);
        if (targetInstance == null || target == undefined) {
            let timer = setTimeout(() => {
                clearTimeout(timer);
                timer = null;
                this.timerMap.delete(target);

            }, delayDuration);
            this.timerMap.set(target, timer);

            return true;
        } else {
            return false;
        }
    },

};


module.exports = DoubleClickTerminator;

