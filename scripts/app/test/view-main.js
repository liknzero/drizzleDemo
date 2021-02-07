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
        var isShow = this.bindings.isShow
        isShow.data.isShowAdd = 1
        isShow.changed()
    },
    editSelect: function(id, e) {
        var data = this.bindings.testData
        var chooseSelect = this.bindings.chooseSelect
        var isShow = this.bindings.isShow
        var info = data.data.find((item) => {
            if (item.id == id) return item
        })
        chooseSelect.data = info
        isShow.data.isShowAdd = 1
        isShow.changed()
    },
    deleteSelect: function(id, e) {
        var data = this.bindings.testData.data
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
    }

}
exports.actions = {
}
exports.dataForActions = {
    
}
