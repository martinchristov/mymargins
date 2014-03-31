'use strict';
angular.module('margins.controllers')
	.controller('Landing', ['$scope', '$location', 'User', function ($scope, $location, User) {
		$scope.try = function(){
			$scope.step2=true;
			setTimeout(function(){
				$('input').focus();
			},6000);
		};
		$scope.logoname = "my";
		$scope.typingName = function(){
			if($scope.name.length>0){
				$scope.logoname = $scope.name+'\'s';
			}
			else {
				$scope.logoname='my';
			}
		}
		$scope.goHome = function(){
			$scope.hidebar = true;
			setTimeout(function(){
				$scope.$apply(function(){
					$location.path('/home');
				});
			},1000);
		}
		console.log(User.isAuth());
	}]);