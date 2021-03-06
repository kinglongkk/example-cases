cc.Class({
    extends: cc.Component,

    properties: {
        // foo: {
        //    default: null,
        //    url: cc.Texture2D,  // optional, default is typeof default
        //    serializable: true, // optional, default is true
        //    visible: true,      // optional, default is true
        //    displayName: 'Foo', // optional
        //    readonly: false,    // optional, default is false
        // },
        // ...
    },

    // use this for initialization
    onLoad: function () {

    },
    
    onBtnClick: function (event) {
        var target = event.target;
        //`cc.${target.name}Collider` ES6字符串组成语法
        var shapeClassName = `cc.${target.name}Collider`;
        var nodePath = 'Canvas/root/' + target.parent.name;
        var collider = cc.find(nodePath).getComponent(shapeClassName);
        cc.log("获取点击按钮的父类节点", nodePath);
        collider.enabled = !collider.enabled;
        
        var label = target.getChildByName('Label').getComponent(cc.Label);
        if (collider.enabled) {
            label.string = label.string.replace('Show', 'Hide');
        }
        else {
            label.string = label.string.replace('Hide', 'Show');   
        }
    }
});
