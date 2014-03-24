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