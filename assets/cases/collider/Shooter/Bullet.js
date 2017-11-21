/*
*   被射手发射的子弹
* */
cc.Class({
    extends: cc.Component,

    properties: {
        speed: 100
    },

    // use this for initialization
    onLoad: function () {
        cc.log(cc.director.getCollisionManager().enabled,
            cc.director.getCollisionManager().enabledDebugDraw,
            cc.director.getCollisionManager().enabledDrawBoundingBox)
        //碰撞检测开关来自父类的开关
    },

    onCollisionEnter: function (other, self) {
        //子弹与砖块和顶部墙面碰撞platform, wall, 自己是bullet
        cc.log(other.node.name, self.node.name);
        this.node.destroy();
    },
    
    // called every frame, uncomment this function to activate update callback
    update: function (dt) {
        this.node.y += this.speed * dt;
    },
});
