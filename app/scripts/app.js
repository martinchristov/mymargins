'use strict';
var angular;

angular.module('margins',[
		'ngRoute',
		'ngAnimate',
		'hmTouchEvents',
		'margins.services',
		'margins.controllers',
		'margins.directives'
	])
	.config(['$routeProvider', function($routeProvider){
		$routeProvider
			.when('/landing', {controller:'Landing', templateUrl:'view/landing.html'})
			.when('/home', {controller:'Home', templateUrl:'view/home.html'})
			.when('/read/:docId', {controller:'Read', templateUrl:'view/read.html'});
		$routeProvider
			.otherwise({ redirectTo: '/landing' });

	}]);

angular.module('margins.controllers',[]);