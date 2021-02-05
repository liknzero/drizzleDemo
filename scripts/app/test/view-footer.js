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
    console.log('entity', 1111111111)
    return data;
};

exports.getEntity = function() {
    console.log('entity', 2222222222)

    var _ = this;
    return {
        isShow: this.bindings.isShow.data.isShowAdd,
        formInfo: this.bindings.chooseSelect.data,
        callbacks: function(data) {
            _.module.dispatch('changeList',data)
        } 
    };
};

exports.getEntityModuleName = function() {
    console.log('entity', 33333333333)

    return 'addTest';
};