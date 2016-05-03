app.config(function($stateProvider){
    $stateProvider
    .state('page1', {
        url: '/page1',
        templateUrl: 'app/page1/page1.html',
        controller: 'LengthController',
        controllerAs: 'lc'
    })
    .state('page2', {
        url: '/page2',
        templateUrl: 'app/page2/page2.html',
        controller: 'TemperatureController',
        controllerAs: 'tc'
    })
    .state('page3', {
        url: '/page3',
        templateUrl: 'app/page3/page3.html',
        controller: 'WeightController',
        controllerAs: 'wc'
    })
    .state('page4', {
        url: '/page4',
        templateUrl: 'app/page4/page4.html',
        controller: 'Length2Controller',
        controllerAs: 'lc2'
    })
    .state('page5', {
        url: '/page5',
        templateUrl: 'app/page5/page5.html',
        controller: 'BmiController',
        controllerAs: 'bc'
    })
    .state('page6', {
        url: '/page6',
        templateUrl: 'app/page6/page6.html',
        controller: 'LoanController',
        controllerAs: 'lc'
    })
})