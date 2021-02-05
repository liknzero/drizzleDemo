exports.items = {
	main: 'main'
}
exports.store = {
    models: {
        comType: { data: true }
    },
    callbacks: {
        checkBtn: function(payload) {
            console.log(payload)
            var comType = this.models.comType
            comType.data = payload.comType
            comType.changed()
        }
    }
}
exports.beforeRender = function() {
    // return this.dispatch('init', this.renderOptions)
}