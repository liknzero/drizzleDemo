var _ = require('lodash/collection')

exports.bindings = {
    chooseInfo: true,
    isShow: true
}
exports.dataForTemplate = {
    chooseName: function (data) {
        return data.chooseInfo.name
    },
    chooseAge: function (data) {
        return data.chooseInfo.age
    },
    isShowModel: function(data) {
        console.log('isShwoModel', data)
        // return false
        return data.isShow.isShowModel == 0
    },
    chooseClass1: function (data) {
        console.log(data.chooseInfo.class === '语文')
        return data.chooseInfo.class === '语文'
    },
    chooseClass2: function (data) {
        console.log(data.chooseInfo.class === '数学')
        return data.chooseInfo.class === '数学'
    },
    chooseClass3: function (data) {
        console.log(data.chooseInfo.class === '物理')
        return data.chooseInfo.class === '物理'
    },
    chooseClass4: function (data) {
        console.log(data.chooseInfo.class === '化学')
        return data.chooseInfo.class === '化学'
    },
}

exports.beforeClose = function() {

}
exports.afterClose = function() {
    
}
exports.events = {
    'click back-button': 'backBtn',
    'click submit-button': 'onSubmit'
}
exports.handlers = {
    backBtn: function() {
        var chooseInfo = this.bindings.chooseInfo
        var isShow = this.bindings.isShow
        var renderOptions = this.module.renderOptions
        renderOptions.callbackClear()
        isShow.clear()
        chooseInfo.clear()
        isShow.changed()
        chooseInfo.changed()
        isShow.data.isShowModel = 0
    },
    onSubmit: function() {
        var tagElements = this.$$('form')[0].getElementsByTagName('input');   
        var renderOptions = this.module.renderOptions
        var elements = {}
        for (var j = 0; j < tagElements.length; j++){ 
            if (tagElements[j].name === 'formClass') {
                if (tagElements[j].checked) {
                    elements.class = tagElements[j].value
                }
            } else {
                elements[tagElements[j].name] = tagElements[j].value
            }
        } 
        for (var key in elements) {
            if (!elements[key]) {
                alert(key + '未定义，请填写！！')
                return false
            }
        }
        elements = { ...renderOptions.formInfo, ...elements } 
        renderOptions.callbacks(elements)
    }
}
exports.actions = {
    // 'click submit-button': 'onSubmit'
}
exports.dataForActions = {
    // submitBtn() {
    //     console.log(this.$$('input[name="formClass"]'))
    // }
}