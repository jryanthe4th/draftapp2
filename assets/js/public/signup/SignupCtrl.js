angular.module('SignupModule').controller('SignupCtrl', ['$scope', '$http', 'toastr', function($scope, $http, toastr) {

    // Set userForm loading state 
    $scope.userForm = {
        loading: false
    }

    // Submit userForm
    $scope.submitUserForm = function() {

        $scope.userForm.loading = true;

        $http.post('/signup', {

            email       : $scope.userForm.email,
            firstName   : $scope.userForm.firstName,
            lastName    : $scope.userForm.lastName,
            password    : $scope.userForm.password
            
        })
        .then(function onSuccess(sailsResponse) {
            window.location = '/';
        })
        .catch(function onError(sailsResponse) {

            // Handle known error type
            // If using sails-disk adapter -- handle duplicate key
            var emailAddressAlreadyInUse = sailsResponse.status = 409;

            if(emailAddressAlreadyInUse) {
                toastr.error('That email address is already in use, please try again.', 'Error');
                return;
            }
        })
        .finally(function eitherWay() {
            $scope.userForm.loading = false;
        });
    };

}]);