
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
    console.log(this.renderOptions,'000')
    return this.dispatch('init', this.renderOptions)
}
