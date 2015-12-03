$AppUtils.directive({
	name : 'siteHeader',
	templateUrl : './s/js/src/components/header/site-header.html',
	controller : function(scope, greetingsService, http) {

		this.someAbout = function() {
			greetingsService.alarm();
		};
	},
	dependencies : {
		services : [ {
			name : '$scope'
		}, {
			url : 'src/components/base-directive/service/greetings-service'
		}, {
			name : '$http'
		}],
		directives : [ 'src/components/header/menu/menu' ]
	}
});