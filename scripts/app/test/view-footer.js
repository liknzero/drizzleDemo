var _ = require('lodash')
exports.bindings = {
    chooseSelect: true,
    isShow: true
};
exports.dataForTemplate = {
    chooseInfo: function (data) {
        return data.chooseSelect
    }
}
exports.events = {
    
}
exports.handlers = {
    
}
exports.actions = {
}
exports.dataForActions = {
    
}

// 这里是定义的引入自定义组件的相关方法和属性
exports.type = 'dynamic';
// 这个data获取的是getEntity返回的值，会作为renderOptions传入给要渲染的Module
exports.dataForEntityModule = function(data) {
    return data;
};

exports.getEntity = function() {
    var _this = this;
    return {
        isShow: this.bindings.isShow.data.isShowAdd,
        formInfo: this.bindings.chooseSelect.data,
        callbacks: function(data) {
            _this.module.dispatch('changeList',data)
        },
        callbackClear: function(data) {
            console.log(22222222222)
            _this.module.dispatch('clearChoose', data)
        }
    };
};

exports.getEntityModuleName = function() {
    return 'addTest';
};