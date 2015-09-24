

 angular.module('myApp',[
'ngRoute']).
config(['$routeProvider',
function($routeProvider){

	$routeProvider.
		when('/home',{
			templateUrl:'http://localhost:8080/Lab/partials/basic-template.html',
			controller:'Basicontroller'

		}).
		otherwise({
                    redirectTo: '/home'
                });

}]);



function Basicontroller($scope){
	
$scope.title = 'This is the title';
$scope.body = 'Welcome...';

}
