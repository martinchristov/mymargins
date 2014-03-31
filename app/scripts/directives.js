'use strict';
angular.module('margins.directives',[])
	.directive('height100', [function () {
		return {
			restrict: 'A',
			link: function ($scope, el, attrs) {
				function resize(){
					el.height($(window).height());
				}
				resize();
				$(window).resize(resize);
			}
		};
	}])
	.directive('fblogin', ['User', function (User) {
		return {
			restrict: 'A',
			link: function ($scope, el, attrs) {
				el.on('click',function(){
					function login (token) {
						User.loginFb(token)
	                    .success(function(d){
                            if($scope.hasOwnProperty('goHome')){
                            	$scope.goHome();
                            }
                        });
					}
					if(FB.getAccessToken()){
						login(FB.getAccessToken());
					}
					else {
						FB.login(function (response) {
			                if (response.status === 'connected') {
			                    var access_token = response.authResponse.accessToken;
			                    login(response.authResponse.accessToken);
	                        } else {
			            	    // 
			                }
	                             
	                    }, {scope: 'email,basic_info'});
					}
					
				})
			}
		};
	}]);
