
exports.items = {
	mains: 'mains'
}
exports.store = {
    models: {
        chooseInfo: { data: {} },
        isShow: { data: { isShowModel: 0 } }
    },
    callbacks: {
        init: function(option) {
            this.models.chooseInfo.data = option.formInfo
            this.models.isShow.data.isShowModel = option.isShow
        },
    }
}
exports.beforeRender = function() {
    return this.dispatch('init', this.renderOptions)
}
exports.mixin = {
    closeModel: function() {
        var chooseInfo = this.store.models.chooseInfo
        var isShow = this.store.models.isShow
        var renderOptions = this.renderOptions
        renderOptions.callbackClear()
        isShow.clear()
        chooseInfo.clear()
        isShow.changed()
        chooseInfo.changed()
        isShow.data.isShowModel = 0
    },
}