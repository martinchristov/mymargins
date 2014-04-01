'use strict';
angular.module('margins.services',[])
	.service('API', ['$http', function ($http) {
		var that=this;
		this.apiUrl = 'http://mymargins.herokuapp.com/api';

		this.token = localStorage.token || null;

		this.get = function(action){
			$http.get(this.apiUrl+action)
		}
		this.put = function(action,data,callb){
			return $http({
				method:'post',
				url:this.apiUrl+action,
				data:data,
		        headers: headers({
                    'Content-Type': 'application/json'
		        })
			});
		}
		this.setToken = function(token){
			localStorage.token = token;
			this.token = token;
		}
		this.isAuth = function(){
			if(this.token)return true;
			else return false;
		}

		function headers(obj){
			if(!obj)obj={};
			if(that.isAuth()){
				obj['Margins-Token']=that.token;
			}
			return obj;
		}
	}])
	.service('User', ['API', function (API) {

		this.isAuth = function(){
			return API.isAuth();
		};

		this.loginFb = function(fbtoken){
			return API.put('/me/', {'facebookToken':fbtoken})
			.success(function(token){
				API.setToken(token);
			})
		}

		this.me = function(){
			return API.get('/me');
		}

	}]);