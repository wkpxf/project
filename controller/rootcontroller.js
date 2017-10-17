app.controller("rootcontroller",["$rootScope","$state",function($rootScope,$state){
	$rootScope.jump = function(url){
		$state.go(url);
	}
	
}])