$AppUtils.service({
	name: 'signInBlock.signInService',
	constructor: function ($http){
	    this.logInSubmit = function(){
	    	alert("You have submited login!");
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