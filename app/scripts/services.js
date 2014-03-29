'use strict';
angular.module('margins.services',[])
	.service('API', ['$http', function ($http) {
		var api = {},
			apiUrl = 'http://mymargins.herokuapp.com/api';
		api.get = function(action){
			$http.get(apiUrl+action)
			// return $http.jsonp(apiUrl+action);
			// return $http.get(apiUrl+action);
		}
		api.put = function(action,data,callb){
			$http({
				method:'post',
				url:apiUrl+action,
				// url:'http://gymrealm.com/something',
				data:data,
				// withCredentials: true,
		        headers: {
                    'Content-Type': 'application/json; charset=utf-8'
		        }
			});
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
			API.put('/me/', {'facebook_token':token}, function(d){
				
			})
		}

		return user;
	}]);