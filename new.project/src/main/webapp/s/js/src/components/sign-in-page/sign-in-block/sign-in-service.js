$AppUtils.service({
	name: 'signInBlock.signInService',
	constructor: function ($http){
	    this.logInSubmit = function(options){
	    	$http({method: 'POST', url: 'login', params: { 
	    		login: options.login,
	    		password: options.password
			}}).then(function(data) {
            	options.onSuccess();
            }, function (data) {
            	options.onError('Some error text!');
            });
	    };
	    this.signUpSubmit = function(){
	    	alert("You have submited sign up!");
	    };
	},
	dependencies: {
		services: [{
			name: '$http'
		}]
	}
});