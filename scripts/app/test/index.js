// const { after } = require('lodash')
var _ = require('lodash/collection');

exports.store = {
	models: {
		testData: { autoLoad: 'after', url: '../testList'},
		chooseSelect: {
			data: {}
		},
		isShow: { data: { isShowAdd: 0 } }
	},
	callbacks: {
		init: function() {
			var testData = this.models.testData
			this.get(testData)
		},
		selectOnesInput: function(payload) {
			var chooseSelect = this.models.chooseSelect
			chooseSelect = payload
		},
		changeList: function(payload) {
			var testData = this.models.testData
			if (payload.id) {
				testData.data.find(function(item) {
					if (item.id == payload.id) return item
				})
			} else {
				testData.data.push(payload)
			}
			testData.changed()
		},
		clearChoose: function() {
			var chooseSelect = this.models.chooseSelect
			chooseSelect.data = {}
			// chooseSelect.changed()
		}
	}
}

exports.beforeRender = function() {
	// 这里已经可以拿到此module的所有实例化属性
	// 此方法走完以后，就开始渲染viewdom和执行相关组件实例
	console.log('beforeRender')
	// this.dispatch('init')
}
exports.afterRender = function() {
	// 在所有请求和子组件渲染完毕以后执行此生命周期
	console.log('afterRender')
}
exports.beforeClose = function() {
	// 在销毁module之前执行此方法， 会销毁相关子组件，region，和组件module实例
	console.log('beforeClose')
}
exports.afterClose = function() {
	// 在销毁组件module之后执行此方法
	console.log('afterClose')
}

exports.items = {
	main: 'main',
	footer: 'footer'
}