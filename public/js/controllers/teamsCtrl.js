app.controller('TeamsCtrl', ['$scope', 'TeamService',
    function ($scope, service) {
        service.query(function (data) {
            $scope.teams = data;
        }, _handleError);
    }]);