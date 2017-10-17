app.directive('myDirective', ['$state','$rootScope','$location','myFactory', function($state,$rootScope,$location,myFactory){
		return {
			templateUrl: './view/bottom.html',
			controller: 'myController',
			link: function($scope, $element, $attrs){
				var arr = window.location.href.split('/');
				
				var arrUrl1 = arr.pop();
				var arrUrl2 = arr.pop();
				arrUrl = arrUrl2 + '.' + arrUrl1;

				$scope.urlA = myFactory.urlA;
				
				if($scope.imgUrl == undefined || $scope.font == undefined){
					var q = $scope.urlA(arrUrl);

					$scope.imgUrl = q.imgUrl;
					$scope.font = q.font;
				}

				$scope.jump = function(url){

					if(url != undefined){
						var q = $scope.urlA(url);

						$scope.imgUrl = q.imgUrl;
						$scope.font = q.font;
					}else {
						throw new Error('没有传递参数!').message;
					}

					$state.go(url);
				
				}
				
			},

			
		};
}]);







