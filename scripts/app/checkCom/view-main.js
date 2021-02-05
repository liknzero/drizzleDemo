// var $ = require('jquery')
exports.bindings = {
    comType: true
}

exports.dataForTemplate = {
    comType: function (data) {
        console.log(data)
        return data.comType
    }
}

exports.beforeClose = function() {

}
exports.afterClose = function() {
    
}
exports.events = {
    'click com-button-*': 'checkBtn'
}
exports.handlers = {
    checkBtn: function(e, obj) {
        console.log(e, obj)
        console.log(this.$$('[name=video]')[0])
        if (~~e == 1) {
            this.$$('[name=video]')[0].classList.remove('hidden')
            this.$$('[name=qrcode]')[0].classList.add('hidden')
        } else {
            this.$$('[name=video]')[0].classList.add('hidden')
            this.$$('[name=qrcode]')[0].classList.remove('hidden')
        }
    }
}
exports.actions = {
    // 'click com-button-*': 'checkBtn'
}
exports.dataForActions = {
    // checkBtn: function(data, events) {
    //     console.log(events)
    //     data.comType = ~~events.target.dataset.type
    //     console.log(data)
    //     return data
    // }
}
// 这里是定义的引入自定义组件的相关方法和属性
exports.type = 'dynamic';
// 这个data获取的是getEntity返回的值，会作为renderOptions传入给要渲染的Module
exports.dataForEntityModule = function(data) {
    return data;
};

exports.getEntity = function(id) {
    return {
        formInfo: {}
    };
};

exports.getEntityModuleName = function() {
    return 'dynamic';
};

exports.components=[{
	id: 'qr-box',  //templates.hbs里定义的元素
	name: 'qrcode', //在qr-code.js里注册的组件名
	options: {width:200,height:200}   //此组件配置属性
}];