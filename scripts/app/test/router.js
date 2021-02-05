module.exports = {
    routes: {
        testData: 'showTestData'
    },
    showTestData: function () {
        return this.app.show('content', 'todos', { forceRender: false })
    }
}