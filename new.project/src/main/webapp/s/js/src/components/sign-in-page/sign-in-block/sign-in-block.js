$AppUtils.directive({
	name : 'signInBlock',
	templateUrl : './s/js/src/components/sign-in-page/sign-in-block/sign-in-block.html',
	controller : function(scope, signInService) {

		this.logInSubmit = function() {
			signInService.logInSubmit();
		};
		this.signUpSubmit = function() {
			signInService.signUpSubmit();
		};
	},
	dependencies : {
		services : [ {
			name : '$scope'
		}, {
			url : 'src/components/sign-in-page/sign-in-block/sign-in-service'
		}],
		directives : [ 'src/components/header/menu/menu' ]
	}
});