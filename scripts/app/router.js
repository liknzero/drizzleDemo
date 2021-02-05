module.exports = {
    routes: {
        todos: 'showTodos', //showTodos对应下面定义的showTodos函数
        listbox: 'showListBox',
        dynamic: 'showDynamic',
        request: 'showRequest',
        test: 'showTest',
        'addTest/:number': 'showAddTest',
        checkCom: 'showCheckCom'
    },

    showTodos: function() {
        //在名为content的Region中展示todos模块
        return this.app.show('content', 'todos', { forceRender: false });
    },
    showListBox: function() {
         //在名为content的Region中展示listbox模块
        return this.app.show('content', 'listbox', { forceRender: true });
    },
    showDynamic: function() {
    	//在名为content的Region中展示dynamic模块
        return this.app.show('content', 'dynamic', { forceRender: true });
    },
    showRequest: function() {
    	//在名为content的Region中展示request模块
        return this.app.show('content', 'request', { forceRender: true });
    },
	showTest: function () {
		return this.app.show('content', 'test', { forceRender: true });
    },
    showAddTest: function () {
        return this.app.show('content', 'addTest', { forceRender: true })
    },
    showCheckCom: function () {
        return this.app.show('content', 'checkCom', { forceRender: true })
    }
};
