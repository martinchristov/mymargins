'use strict';
angular.module('margins.services',[])
	.service('User', ['$http', function ($http) {
		var user = {};

		user.isAuth = true;

		return user;
	}]);