window.GG = window.GG || {};



function getTarget(name) {
    if(!GG[name]) {
        GG[name] = require(name)
    }
    return GG[name];
}



window.G_COMMON = function () {
    return getTarget("inGlobal_Common");
}