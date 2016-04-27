/*var toggleVisibility = function(element) {
    if(element.style.display=='block'){
    	element.style.display='none';
    } else {
    	element.style.display='block';
    }
	};*/
	
function createCallRecord() {
	window.location = "confirmation.html";
}

var kiosk = angular.module('kiosk',[]);

kiosk.controller('kiosk-controller', ['$scope', function($scope) {
	$scope.servicedeskname = 'Help Desk Central';
	$scope.welcome = 
		'Please sign in and a consultant will be with you shortly.';
	/*$scope.signinform = 
		'<form>' + 
		'UIN <input type="text" name="uin" placeholder="111001111"' +
		'</form>';/* +
				'ng-model="user.uin" ng-required="true" ng-minlength="9"' +
				'ng-maxlength="9">'
			'<p ng-show="form.uin.$invalid && form.uin.$touched">' +
				'Please enter your UIN.' +
			'</p>' +
			'NetID <input type="text" name="netid" placeholder="your_netid"' +
				'ng-model="user.netid" ng-required="true" ng-minlength="3"' +
				'ng-maxlength="20">' +
			'<p ng-show="form.netid.$invalid && form.netid.$touched">' +
				'Please enter your NetID.' +
			'</p>' +
      'First name <input type="text" name="firstname" placeholder="Joe"' + 
      	'ng-model="user.firstname" ng-required="true">' + 
      '<p ng-show="form.firstname.$invalid && form.firstname.$touched">' + 
				'Please enter your first name.' +
			'</p>' +
      'Last name <input type="text" name="lastname" placeholder="Aggie" ' +
      	'ng-model="user.lastname" ng-required="true">' +
      '<p ng-show="form.lastname.$invalid && form.lastname.$touched">' +
				'Please enter your last name.' +
			'</p>' +
      'Phone number <input type="tel" name="phone"' + 
      	'placeholder="979.845.8300" ng-model="user.phone">' +
      'Email address <input type="email" name="email"' + 
      	'placeholder="your_netid@tamu.edu" ng-model="user.email">' +
      '<p ng-show="form.email.$invalid && form.email.$touched">' +
				'Please enter a valid email address.' +
			'</p>' +
      'What can we help you with? <select name="service" ng-model="user.service"' +
      	'ng-required="true">' +
      '<p ng-show="form.service.$invalid && form.service.$touched">' +
				'Choose the service that you need assistance with.' +
			'</p>' +
      '</select>';*/
}]);
