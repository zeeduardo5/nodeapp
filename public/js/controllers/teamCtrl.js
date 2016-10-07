app.controller('TeamCtrl', ['$scope', '$routeParams', 'TeamService',
    function ($scope, $routeParams, service) {
        service.get({
            teamId: $routeParams.teamId
        }, function (data, headers) {
            $scope.team = data;
        }, _handleError);
    }]);
function _handleError(response) {
    // TODO: Do something here. Probably just redirect to error page
    console.log('%c ' + response, 'color:red');
}