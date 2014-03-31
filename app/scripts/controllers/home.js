'use strict';
angular.module('margins.controllers')
	.controller('Home', ['$scope','API','$upload', function ($scope, API, $upload) {
		// if(!User.isAuth()){
		// 	window.location.href="#/landing";
		// }

		$scope.onFileSelect = function($files) {
    		for (var i = 0; i < $files.length; i++) {
      			var file = $files[i];
      			$scope.upload = $upload.upload({
        			url: API.apiUrl+'/documents/', //upload.php script, node.js route, or servlet url
        			headers: {'margins-token': API.token},
        			file: file, // or list of files: $files for html5 only
				}).progress(function(evt) {
					console.log('percent: ' + parseInt(100.0 * evt.loaded / evt.total));
				}).success(function(data, status, headers, config) {
				// file is uploaded successfully
				console.log(data);
				});
    		}
    	}

	}]);