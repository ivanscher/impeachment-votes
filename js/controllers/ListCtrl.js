angular.module('ListCtrl', [])
.controller('ListCtrl', function($scope, $rootScope, $http){
	$http.get('json/mapa-congresso.json')
	.success(function(data) {				
		$scope.votes = data;
	})
	.error(function(err){
		console.log('Error: ', err);
	});
	$scope.speak = function(discurso){
		if(discurso)
			responsiveVoice.speak(discurso, 'Portuguese Female');
		else
			return false;
	}
});