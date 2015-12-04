$AppUtils.directive({
	name: 'baseDirective',
	templateUrl: './s/js/src/components/base-directive/base-dir.html',
	controller: function (scope) {

	},
	dependencies: {
		services: [{
			name: '$scope'
		}],
		directives: ['src/components/header/site-header']
	}
});