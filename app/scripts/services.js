'use strict';
angular.module('margins.services',[])
	.service('API', ['$http', '$httpBackend', function ($http, $httpBackend) {
		var api = {},
			apiUrl = 'http://mymargins.herokuapp.com/api';
		api.get = function(action){
			$http.get(apiUrl+action)
			return $http.jsonp(apiUrl+action);
			// return $http.get(apiUrl+action);
		}

		//backend mockery
		// $httpBackend.whenGET(apiUrl+'/login/fb/').respond(function(method, url, data){
		//   return {success:true};
		// });

		return api;
	}])
	.service('User', ['API', function (API) {
		var user = {};

		user.isAuth = true;

		user.loginFb = function(token){
			return API.get('/login/fb/?access_token='+token,function(d){
				
			})
		}

		return user;
	}]);