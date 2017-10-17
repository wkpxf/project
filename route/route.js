app.config(["$stateProvider","$urlRouterProvider",function($stateProvider,$urlRouterProvider){

	$urlRouterProvider.otherwise("/lead1");

	$stateProvider
		.state('lead1',{
			url: "/lead1",
			templateUrl: "./view/lead1.html",
			resolve: {
				des: ['$ocLazyLoad', function ($ocLazyLoad) {
					return $ocLazyLoad.load('lead');
				}]
			}
		})

		.state('lead2',{
			url: "/lead2",
			templateUrl: "./view/lead2.html",
			resolve: {
					des: ['$ocLazyLoad', function ($ocLazyLoad) {
						return $ocLazyLoad.load('lead');
				}]
			}
		})

		.state('lead3',{
			url: '/lead3',
			templateUrl: "./view/lead3.html",
			resolve: {
					des: ['$ocLazyLoad', function ($ocLazyLoad) {
						return $ocLazyLoad.load('lead');
				}]
			}
		})

		.state('login',{
			url: '/login',
			templateUrl: "./view/login.html",
			controller: "loginController",
			resolve: {
				des: ['$ocLazyLoad', function($ocLazyLoad){
					return $ocLazyLoad.load('login')
				}]
			}
		})

		.state('zhuce',{
			url: '/zhuce',
			templateUrl: "./view/zhuce.html",
			controller: "zhuceController",
			resolve:{
				des: ['$ocLazyLoad', function($ocLazyLoad){
					return $ocLazyLoad.load('zhuce')
				}]
			}
		})

		.state('my', {
				url: '',
				abstract: true,
				templateUrl: './view/my.html',
				resolve: {
					des : ['$ocLazyLoad', function($ocLazyLoad){
						return $ocLazyLoad.load('my');
					}],
				},
			})


		.state('my.home',{
			url: '/my/home',
			templateUrl: "./view/home.html",
			resolve: {
				des: ['$ocLazyLoad', function($ocLazyLoad){
					return $ocLazyLoad.load('home')
				}]
			}
		})

		.state('my.fenlei',{
			url: '/my/fenlei',
			templateUrl: "./view/fenlei.html",
			resolve:{
				des:['$ocLazyLoad',function($ocLazyLoad){
					return $ocLazyLoad.load('fenlei')
				}]
			}
		})


		.state('my.shopping',{
			url: '/my/shopping',
			templateUrl: "./view/shopping.html",
			resolve:{
				des:['$ocLazyLoad',function($ocLazyLoad){
					return $ocLazyLoad.load('shopping')
				}]
			}
		})

		
		.state('my.me',{
			url: '/my/me',
			templateUrl: "./view/me.html",
			resolve:{
				des:['$ocLazyLoad',function($ocLazyLoad){
					return $ocLazyLoad.load('me')
				}]
			}
		})

		.state('my.search',{
			url: '/my/search',
			templateUrl: "./view/search.html",
			resolve:{
				des:['$ocLazyLoad',function($ocLazyLoad){
					return $ocLazyLoad.load('search')
				}]
			}
		})

		.state('my.liebiao',{
			url: '/my/liebiao',
			templateUrl: "./view/liebiao.html",
			resolve:{
				des:['$ocLazyLoad',function($ocLazyLoad){
					return $ocLazyLoad.load('liebiao')
				}]
			}
		})

		.state('shop',{
			url: '/shop',
			templateUrl: "./view/shop.html",
			controller: "shopController",
			resolve:{
				des:['$ocLazyLoad',function($ocLazyLoad){
					return $ocLazyLoad.load('shop')
				}]
			}
		})

		.state('purchase',{
			url: '/purchase',
			templateUrl: "./view/purchase.html",
			controller: "purchaseController",
			resolve:{
				des:['$ocLazyLoad',function($ocLazyLoad){
					return $ocLazyLoad.load('purchase')
				}]
			}
		})

		.state('lijigm',{
			url: '/lijigm',
			templateUrl: "./view/lijigm.html",
			controller: "lijigmController",
			resolve:{
				des:['$ocLazyLoad',function($ocLazyLoad){
					return $ocLazyLoad.load('lijigm')
				}]
			}
		})

		.state('querendd',{
			url: '/querendd',
			templateUrl: "./view/querendd.html",
			controller: "querenddController",
			resolve:{
				des:['$ocLazyLoad',function($ocLazyLoad){
					return $ocLazyLoad.load('querendd')
				}]
			}
		})

		.state('order',{
			url: '/order',
			templateUrl: "./view/order.html",
			controller: "orderController",
			resolve:{
				des:['$ocLazyLoad',function($ocLazyLoad){
					return $ocLazyLoad.load('order')
				}]
			}
		})

		.state('site',{
			url: '/site',
			templateUrl: "./view/site.html",
			controller: "siteController",
			resolve:{
				des:['$ocLazyLoad',function($ocLazyLoad){
					return $ocLazyLoad.load('site')
				}]
			}
		})

		.state('setting',{
			url: '/setting',
			templateUrl: "./view/setting.html",
			controller: "settingController",
			resolve:{
				des:['$ocLazyLoad',function($ocLazyLoad){
					return $ocLazyLoad.load('setting')
				}]
			}
		})

		.state('message',{
			url: '/message',
			templateUrl: "./view/message.html",
			controller: "messageController",
			resolve:{
				des:['$ocLazyLoad',function($ocLazyLoad){
					return $ocLazyLoad.load('message')
				}]
			}
		})

		.state('mc',{
			url: '/mc',
			templateUrl: "./view/mc.html",
			controller: "mcController",
			resolve:{
				des:['$ocLazyLoad',function($ocLazyLoad){
					return $ocLazyLoad.load('mc')
				}]
			}
		})

		.state('collect',{
			url: '/collect',
			templateUrl: "./view/collect.html",
			controller: "collectController",
			resolve:{
				des:['$ocLazyLoad',function($ocLazyLoad){
					return $ocLazyLoad.load('collect')
				}]
			}
		})

		.state('bound',{
			url: '/bound',
			templateUrl: "./view/bound.html",
			controller: "boundController",
			resolve:{
				des:['$ocLazyLoad',function($ocLazyLoad){
					return $ocLazyLoad.load('bound')
				}]
			}
		})


		
}])