# No-Double-Click
防止双击、多次点击。借助定时器实现的小工具，内部通过哈希表管理，可以连续为多个对象监听。可以帮助分析非常短时间内多次操作是否被允许。可以自由设定最小间隔时间，使用方便，对项目无污染。

介绍：主要，也是唯一的API。 
```
/**
* 动作是否允许
* @param {操作对象,可以传this或Node等任何非空对象} target 
* @param {延时时间,默认500ms} delayDuration
* @param 返回 true允许操作 or false不允许操作 
*/
actionAllowable: function (target, delayDuration = 500) {
 .....
}
```

使用示例：
```
// 比如防止这个cell被重复点击，我们通过 
‘if (!doubleClickTerminator.actionAllowable(this.node))’判断本次操作是否被允许，默认是500ms。
如果这样传入时间参数‘if (!doubleClickTerminator.actionAllowable(this.node，1000))’，则表示两次操作至少需要间隔1S。
cellClicked() {
    if (!doubleClickTerminator.actionAllowable(this.node)) return;

    let headInfo = {
        "itemData": this.itemData,
        "userIdAndNameMap": this.userIdAndNameMap,
        "gameId": this._gameId,
    };
    cc.vv.dispatcher.emit("showRecordDetailWindow", headInfo);
},

```

初始化：
var doubleClickTerminator = require('DoubleClickTerminator');
doubleClickTerminator.init();

