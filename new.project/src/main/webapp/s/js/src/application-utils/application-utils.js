define(['lib/angular-ui-router',
        'src/application-utils/common-utils'], function(){

	var rootAppModules = ['ngRoute', 'ui.router'],
		baseModule = angular.module('baseModule', []),
		ROOT_APP_MODULE_NAME = 'rootAppModule';
	
	window.$AppUtils = {
		initRootModule: function(options){
			rootAppModules.push('baseModule');
			angular
				.module(ROOT_APP_MODULE_NAME, rootAppModules)
				.config(
					function baseAppConfig($controllerProvider, $provide,
							$compileProvider, $filterProvider, $locationProvider,
							$stateProvider, $urlRouterProvider) {
						overrideComponentsFactories(baseModule, {
							$controllerProvider: $controllerProvider,
							$provide: $provide,
							$compileProvider: $compileProvider,
							$filterProvider: $filterProvider
						});
						options.baseAppConfig($locationProvider,
								$stateProvider, $urlRouterProvider);
					})
				.run(options.runSettings);
	
			angular.bootstrap(document, [ ROOT_APP_MODULE_NAME ]);
		},
		directive: function(options){
			options.isDirective = true;
			addComponent(options);
		},
		service: function(options){			
			options.isService = true;
			addComponent(options);
		},
		initRouter: function ($stateProvider, $urlRouterProvider, routeStates) {
			$urlRouterProvider.otherwise(function($injector) {
				goToPageNotFound($injector);
			});
			
			routeStates.forEach(function(state){
				$stateProvider.state(state.name, new UiRouterState({
				    template: state.template,
				    templateUrl : state.templateUrl,
				    url: state.url,
					controller: state.controller,
					dependencies: state.dependencies
				}));
			});
			
			function goToPageNotFound($injector){
				$injector.get('$state').go('404', null, {
					location : false
				});
			}
			
			function UiRouterState(options){
				
				this.url = "/" + options.url;
				this.templateUrl = options.templateUrl;
				this.resolve = new HttpResolver({
					url: options.url,
					dependencies: options.dependencies
				});
				this.controller = function($injector, $scope, $httpResolver){
					if($httpResolver && $httpResolver.status === 404){
						goToPageNotFound($injector);
					} else {
						$scope.$on('$destroy', function() {
		                	/* callback for scope 'before-destroy' */
		            	});
						options.controller($injector, $scope, $httpResolver);
					}
			    };	    
			}
			
			function HttpResolver(options){
				this.$httpResolver = function($http, $injector, $q){
					var deferred = $q.defer();
					require(options.dependencies || [], function(){
			            $http({method: 'POST', url: options.url})
			            .then(function(data) {
							deferred.resolve(data);
			            }, function (data) {
			            	deferred.reject(data);
			            });
		            });
					return deferred.promise;					
				};
			}
		}
	};
	
	function getDirectoryConfig(options){
		return function(){
			return new BaseDirectoryConfig(options);
		}
	}
	
	function BaseDirectoryConfig(options){
		this.scope = options.scope ? options.scope : {};
		this.scope.injectArgs = '=';
		if(options.templateUrl){
			this.templateUrl = options.templateUrl;
		} else if(options.template){
			this.template = options.template;
		}
		this.link = options.link;

		this.controllerAs = '$ctrl';
		this.controller = options.name + 'Ctrl';
		this.controllerName = options.name + 'Ctrl';
	}
	
	function overrideComponentsFactories(module, services){
		module.controller = services.$controllerProvider.register;
		module.service = services.$provide.service;
		module.directive = services.$compileProvider.directive;
		module.filter = services.$filterProvider.register;
	}
	
	function addComponent(options){
		define(getDependenciesUrls(options.dependencies), function(){
			var	ctrlDependencies = getCtrlDependencies(options.dependencies, arguments);
			if(options.isDirective){
				baseModule.directive(options.name, getDirectoryConfig({
					templateUrl : options.templateUrl,
					link: options.link,
					name: options.name
				}));
				ctrlDependencies.push(options.controller);			
				baseModule.controller(options.name + 'Ctrl', ctrlDependencies);
			} else if(options.isService){
				ctrlDependencies.push(options.constructor);
				baseModule.service(options.name, ctrlDependencies);
				return options.name;
			}
		});
		
		function getCtrlDependencies(dependencies, theArgs){
			var myIndex = 0;
			if(dependencies && dependencies.services instanceof Array){
				return dependencies.services.map(function(service){
					if(service){
						if(typeof service.url === 'string'){
							return theArgs[myIndex++];
						} else if(typeof service.name === 'string'){
							return service.name;
						}
					}
				});
			} else {
				return [];
			}
		}
		
		function getDependenciesUrls(dependencies){
			var result = [];
			if(dependencies){
				if(dependencies.services instanceof Array){
					dependencies.services.forEach(function(service){
						if(service && typeof service.url === 'string'){
							result.push(service.url);
						}
					});
				}
				if(dependencies.directives instanceof Array){
					dependencies.directives.forEach(function(directive){
						if(typeof directive === 'string'){
							result.push(directive);
						}
					});
				}
			}
			return result;
		}
	}	
});