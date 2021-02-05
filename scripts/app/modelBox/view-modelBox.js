
exports.components = [function() {
    return {}
}]
exports.beforeClose = function() {

}
exports.afterClose = function() {
    
}
exports.actions = {
    'click cancel-btn': 'cancelBtn',
    'click confirm-btn': 'confirmBtn',
}
exports.dataForActions = {
    cancelBtn: function() {
        console.log(this)
    },
    confirmBtn: function() {
        console.log(this)
    }
}
exports.type = 'modelBox';
// 这个data获取的是getEntity返回的值，会作为renderOptions传入给要渲染的Module
exports.dataForEntityModule = function(data) {
    return data;
};

exports.getEntity = function(id) {
    return {
        isModel: '1111111111'
    };
};

exports.getEntityModuleName = function() {
    return 'modelBox';
};