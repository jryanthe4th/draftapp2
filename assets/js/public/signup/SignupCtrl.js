angular.module('SignupModule').controller('SignupCtrl', ['$scope', '$http', 'toastr', function($scope, $http, $toastr) {

    $scope.userForm = {
        loading: false
    }

}]);