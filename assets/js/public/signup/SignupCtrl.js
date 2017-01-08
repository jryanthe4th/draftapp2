angular
    .module('SignupModule')
    .controller('SignupCtrl', ['$scope', '$http', 'toastr', function($scope, $http, toastr) {

    // Set signupForm loading state 
    $scope.signupForm = {
        loading: false
    }

    // Submit signupForm
    $scope.submitSignupForm = function() {

        $scope.signupForm.loading = true;

        $http.post('/signup', {

            email       : $scope.signupForm.email,
            firstName   : $scope.signupForm.firstName,
            lastName    : $scope.signupForm.lastName,
            password    : $scope.signupForm.password
            
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
            $scope.signupForm.loading = false;
        });
    };

}]);