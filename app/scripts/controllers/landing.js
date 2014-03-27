'use strict';
angular.module('margins.controllers')
	.controller('Landing', ['$scope', function ($scope) {
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
	}]);