$AppUtils.directive({
	name : 'signInBlock',
	templateUrl : './s/js/src/components/sign-in-page/sign-in-block/sign-in-block.html',
	controller : function(scope, signInService) {

		this.logInSubmit = function() {
			signInService.logInSubmit({
				credentials: {
					login: 'user',
					password: 'password'
				},
				onSuccess: function(){
					console.log('credentials correct');
				}, 
				onError: function(errorMess){
					console.log('credentials incorrect: ' + errorMess);
				}
			});
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