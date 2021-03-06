(function(){
	
	require.config({
		baseUrl: "./s/js",
		paths: {
	         'angular': 'lib/ng/angular',
	         'application-utils': 'src/application-utils/application-utils'
	    }
	});

	require(['angular'], function(){
		
		require(['lib/ng/angular-route'], function(){
			
			require(['application-utils'], function(){
			         
				require(['src/components/base-directive/base-dir'], function(){
					
					$AppUtils.initRootModule({
						baseAppConfig: baseAppConfig,
						runSettings: getBaseAppRunSettings()
					});
		
					function baseAppConfig($locationProvider, $stateProvider, $urlRouterProvider){
						$locationProvider.html5Mode(true);
						$AppUtils.initRouter($stateProvider, $urlRouterProvider, [{
							name: '404',
							template: '<div>Page not found</div>'
						}, {
							name: 'home',
							url: ' ',
							templateUrl : 's/js/src/components/route-partials/home.html',
							controller: function($injector, $scope, $httpResolver){
						        console.log('>> home!');
						    }
						}, {
							name: 'state1',
							url: 'state1',
							dependencies: ['src/components/state1/state1-info'],
							templateUrl : 's/js/src/components/route-partials/state1.html',
							controller: function($injector, $scope, $httpResolver){
						        console.log('>> state1! Much better!');
						    }
						}, {
							name: 'state2',
							url: 'state2',
							templateUrl : 's/js/src/components/route-partials/state2.html',
							controller: function($injector, $scope, $httpResolver){
						        console.log('>> state2!');
						    }
						}, {
							name: 'state3',
							url: 'state3',
							templateUrl : 's/js/src/components/route-partials/state1.html',
							controller: function($injector, $scope, $httpResolver){
						        console.log('>> state3!');
						    }
						}]);
					}
					
					function getBaseAppRunSettings(){
						return ['$rootScope', '$location', '$http', '$state', function($rootScope, $location, $http, $state) {
							/* It looks weird, but this empty function force Angular initialize service $state, 
							   so he will trigger initial route controller */
							
						}];
					}
				});
			});
		});
	});
})();