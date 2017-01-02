angular.module('LoginModule').controller('LoginCtrl', ['$scope', '$http', 'toastr', function($scope, $http, toastr) {

    $scope.loginForm = {
        loading: false 
    }

    // Log In
    $scope.submitLoginForm = function() {

        // Set the loading state (i.e. show loading spinner)
        $scope.loginForm.loading = true;

        // Submit request to Sails
        $http.put('/login', {
            email: $scope.loginForm.email,
            password: $scope.loginForm.password
        })
        .then(function onSuccess() {
            // Refresh the page now that user is logged in
            window.location = '/'
        })
        .catch(function onError(sailsResponse) {
            // Handle known error types
            // Invalide username / password combination
            if(sailsResponse.status == 400 || 404) {
                toastr.error('Invalid email/password combination.', 'Error', {
                    closeButton: true
                });
                return;
            }

            toastr.error('An unexpected error occurred. Please try again!', 'Error', {
                closeButton: true
            });
            return;
        })
        .finally(function eitherWay() {
            $scope.loginForm.loading = false;
        });
    };

}]);