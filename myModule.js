angular.module('myModule', [])

.provider('myProvider', function() {

	console.log('myProvider init');
	//这也是一个构造函数
	//但是不是myProvider服务的构造函数,而是该服务供应商的构造函数
	this.path = '';

	//服务是通过this.$get函数获得的,可以是字符串，也可以是对象
	this.$get = function() {
		console.log('myProvider $get run....');
		var that = this;
		var obj = {
			getPath: function() {
				return 'that.path';
			}
		}

		return obj;
	}

})