var _ = require('lodash')
exports.bindings = {
    testData: true,
    chooseSelect: true,
    isShow: true
};
exports.dataForTemplate = {
    dataTestData: function (data) {
        console.log('testData', data.testData)
        return data.testData
    }
}
exports.events = {
    'click edit-one-*': 'editSelect',
    'click delete-one-*': 'deleteSelect',
    'change selectAll': 'selectAllInput',
    'click add-button': 'addSecectInfo',
    'click delete-select-button': 'deleteMore'
}
exports.handlers = {
    addSecectInfo: function (e, obj) {
        console.log(e)
        console.log(obj)
        // this.app.navigate('addTest', true)
        console.log(this.bindings.testData.data)
        var isShow = this.bindings.isShow
        isShow.data.isShowAdd = 1
        isShow.changed()
        // this.bindings.testData.data.push({
        //     id: new Date().getTime(),
        //     class: "语文",
        //     name: "李华华",
        //     age: 18
        // })
    },
    editSelect: function(id, e) {
        var data = this.bindings.testData
        var chooseSelect = this.bindings.chooseSelect
        var info = data.data.find((item) => {
            if (item.id == id) return item
        })
        chooseSelect.data = info
        chooseSelect.changed()
    },
    deleteSelect: function(id, e) {
        var data = this.bindings.testData.data
        console.log(data)
        data.splice(data.find(function(item) {item.id = id}), 1)
        e.target.parentNode.parentNode.remove()
    },
    selectAllInput: function (e, obj) {
        var isCheck = obj.checked
        _.map(this.$$('input[name="selectOne"]'), function(x) {
            var element = x || {};
            element.checked = isCheck;
        });
    },
    deleteMore: function(e, obj) {
        var list = _.map(this.$$('input[name="selectOne"]'), function(x) {
            var element = x || {};
            if (element.checked) {
                console.log(element)
                element.parentNode.parentNode.remove()
            }
        });
        console.log(list)
    }

}
exports.actions = {
}
exports.dataForActions = {
    
}
