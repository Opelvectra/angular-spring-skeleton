$AppUtils.directive({
	name : 'siteHeader',
	templateUrl : './s/js/src/components/header/site-header.html',
	controller : function(scope) {

	},
	dependencies: {
		services: [{
			name: '$scope'
		}],
		directives : [ 'src/components/header/menu/menu' ]
	}
});