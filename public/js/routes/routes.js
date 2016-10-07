app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: '/js/templates/home.html'
        })
        .when('/employees', {
            templateUrl: 'js/templates/employees.html',
            controller: 'EmployeesCtrl'
        })
        .when('/employees/:employeeId', {
            templateUrl: 'js/templates/employee.html',
            controller: 'EmployeeCtrl'
        })
        .when('/teams', {
            templateUrl: 'js/templates/teams.html',
            controller: 'TeamsCtrl'
        })
        .when('/teams/:teamId', {
            templateUrl: 'js/templates/team.html',
            controller: 'TeamCtrl'
        })
        .otherwise({
            redirectTo: '/'
        });
}]);