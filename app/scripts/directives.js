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
					if(FB.getAccessToken()){
						User.loginFb(FB.getAccessToken())
	                    .success(function(d){
                            
                        });
					}
					else {
						FB.login(function (response) {
							console.log(response);
			                if (response.status === 'connected') {
			                    var access_token = response.authResponse.accessToken;

			                    User.loginFb(response.authResponse.accessToken)
			                    .success(function(d){
	                                
	                            });
	                        } else {
			            	    // 
			                }
	                             
	                    });
					}
					
				})
			}
		};
	}]);
