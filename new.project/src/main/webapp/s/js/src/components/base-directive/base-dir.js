$AppUtils.directive({
	name: 'baseDirective',
	templateUrl: './s/js/src/components/base-directive/base-dir.html',
	controller: function (scope, greetingsService, http) {

		this.someAbout = function(){
			console.log(scope.injectArgs.b);
			greetingsService.alarm();
		};
	},
	dependencies: {
		services: [{
			name: '$scope'
		}, {
			url: 'src/components/base-directive/service/greetings-service'
		}, {
			name: '$http'
		}],
		directives: ['src/components/header/site-header']
	}
});