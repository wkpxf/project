(function () {
var app = angular.module('app');

//配置懒加载信息
app.config(["$provide", "$compileProvider", "$controllerProvider", "$filterProvider", function ($provide, $compileProvider, $controllerProvider, $filterProvider) {
 app.controller = $controllerProvider.register;
 app.directive = $compileProvider.directive;
 app.filter = $filterProvider.register;
 app.factory = $provide.factory;
 app.service = $provide.service;
 app.constant = $provide.constant;
}])
	.config(["$ocLazyLoadProvider", function ($ocLazyLoadProvider) {
		$ocLazyLoadProvider.config({
	 		debug: false,
	 		events: false,
	 		modules: [
		 		{
		 			name: 'lead',
		 			files: [
		 				"./controller/rootcontroller.js"
		 			]
		 		},

		 		{
		 			name: 'login',
		 			files: [
		 				"./controller/loginController.js"
		 			]
		 		},

		 		{
		 			name: 'my',
		 			files: [
		 				"./controller/myController.js"
		 			]
		 		},

		 		{
		 			name: 'home',
		 			files: [
		 				"./controller/homeController.js"
		 			]
		 		},

		 		{
		 			name: 'zhuce',
		 			files: [
		 				"./controller/zhuceController.js"
		 			]
		 		},

		 		{
		 			name: 'search',
		 			files: [
		 				"./controller/searchController.js"
		 			]
		 		},

		 		{
		 			name: 'fenlei',
		 			files: [
		 				"./controller/fenleiController.js"
		 			]
		 		},

		 		{
		 			name: 'liebiao',
		 			files: [
		 				"./controller/liebiaoController.js"
		 			]
		 		},

		 		{
		 			name: 'shop',
		 			files: [
		 				"./controller/shopController.js"
		 			]
		 		},

		 		{
		 			name: 'shopping',
		 			files: [
		 				"./controller/shoppingController.js"
		 			]
		 		},

		 		{
		 			name: 'purchase',
		 			files: [
		 				"./controller/purchaseController.js"
		 			]
		 		},

		 		{
		 			name: 'lijigm',
		 			files: [
		 				"./controller/lijigmController.js"
		 			]
		 		},

		 		{
		 			name: 'querendd',
		 			files: [
		 				"./controller/querenddController.js"
		 			]
		 		},

		 		{
		 			name: 'order',
		 			files: [
		 				"./controller/orderController.js"
		 			]
		 		},

		 		{
		 			name: 'site',
		 			files: [
		 				"./controller/siteController.js"
		 			]
		 		},

		 		{
		 			name: 'setting',
		 			files: [
		 				"./controller/settingController.js"
		 			]
		 		},

		 		{
		 			name: 'message',
		 			files: [
		 				"./controller/messageController.js"
		 			]
		 		},

		 		{
		 			name: 'mc',
		 			files: [
		 				"./controller/mcController.js"
		 			]
		 		},

		 		{
		 			name: 'me',
		 			files: [
		 				"./controller/meController.js"
		 			]
		 		},


		 		{
		 			name: 'collect',
		 			files: [
		 				"./controller/collectController.js"
		 			]
		 		},

		 		{
		 			name: 'bound',
		 			files: [
		 				"./controller/boundController.js",
		 				"./css/bound.css"
		 			]
		 		},


		 		

	 		]
 		});
	}]);
	
})();