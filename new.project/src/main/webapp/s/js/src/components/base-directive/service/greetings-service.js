$AppUtils.service({
	name: 'baseDirective.greetingsService',
	constructor: function ($http){
	    this.alarm = function(){
	    	alert("this Iz greetings__Service controller!");
	    }
	},
	dependencies: {
		services: [{
			name: '$http'
		}]
	}
});