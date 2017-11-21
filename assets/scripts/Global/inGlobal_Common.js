var target = function () {

}
target.prototype = {
    batchInitObjPool(thisO, objArray) {
        for (var i = 0; i < objArray.length; i++) {
            var objInfo = objArray[i];
            this.initObjPool(thisO, objInfo);
        }
    },

    //初始化对象池
    initObjPool(thisO, objInfo){
        var name = objInfo.name;
        var poolName = name + "pool";
        thisO[poolName] = new cc.NodePool();
        let initPoolCount = objInfo.initPoolCount;
        for (var ii = 0; ii < initPoolCount; i++) {
            let nodeO = cc.instantiate(objInfo.prefab);//创建节点
            thisO[poolName].put(nodeO);
        }
    },
    //生成节点
    getNewNode(pool, prefab, nodeParent){
        let newNode = null;
        //通过size接口判断对象池中是否有空闲对象
        if (pool.size() > 0) newNode = pool.get();
        //如果没有空闲对象，也就是池中备用对象不够时，我们就用cc.instantiate重新创建
        else newNode = cc.instantiate(prefab);
        nodeParent.addChild(newNode);
        return newNode;
    },
    //放回对象池
    backObjPool(thisO, nodeInfo){
        var poolName = nodeInfo.name + "pool";
        thisO[poolName].put(nodeInfo);
    },
};
module.exports = new target();