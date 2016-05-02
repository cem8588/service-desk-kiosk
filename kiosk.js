function createCallRecord() {
	window.location = "confirmation.html";
}

var kiosk = angular.module('kiosk',[]);

kiosk.controller('kiosk-controller', ['$scope', function($scope) {
	$scope.servicedeskname = 'Help Desk Central';
	$scope.welcome = 
		'Please sign in and a consultant will be with you shortly.';
	$scope.showButton = true;
}]);
