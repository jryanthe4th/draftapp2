angular
    .module('DashboardModule')
    .controller('DashboardCtrl', ['$scope', '$http', function($scope, $http) {

        $scope.attributes = {};
        $scope.attributes.leagueName = '';

        io.socket.get('/league', function(data) {
            $scope.attributes.leagueName = data;
            $scope.$apply();
        });

}]);
