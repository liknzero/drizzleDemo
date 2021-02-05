exports.items = {
    modelBox: 'modelBox'
}
exports.store = {
    models: {
        formInfo: { data: {} }
    },
    callbacks: {
        init: function(option) {
            var formInfo = this.models.formInfo
            formInfo.data = option.formInfo
        }
    }
}
exports.beforeRender = function() {
    return this.dispatch('init', this.renderOptions)
}