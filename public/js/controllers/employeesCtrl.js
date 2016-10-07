app.controller('EmployeesCtrl', ['$scope', 'EmployeeService',
    function ($scope, service) {
        service.query(function (data, headers) {
            $scope.employees = data;
        }, _handleError);
    }]);