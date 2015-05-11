'use strict';

angular.module('myApp', ['ngRoute'])
.config([$routeProvider', function($routeProvider) {
	$routeProvider
	.when('/', {
		templateUrl: 'home/index.html'
	})
	.when('/services', {
		templateUrl: 'services/index.html'
	})
	.when('/contact', {
		templateUrl: 'contact/index.html'
	})
	.otherwise({
		redirectTo: '/'
	});
}]);

