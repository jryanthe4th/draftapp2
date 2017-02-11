angular
    .module('SigninModule')
    .controller('SigninCtrl', ['$scope', '$http', 'toastr', function($scope, $http, toastr) {

    $scope.signinForm = {
        loading: false 
    }

    // Log In
    $scope.submitSigninForm = function() {

        // Set the loading state (i.e. show loading spinner)
        $scope.signinForm.loading = true;

        // Submit request to Sails
        $http.put('/signin', {
            email: $scope.signinForm.email,
            password: $scope.signinForm.password
        })
        .then(function onSuccess() {
            // Refresh the page now that user is logged in
            window.location = '/';
        })
        .catch(function onError(sailsResponse) {
            // Handle known error types
            // Invalide username / password combination
            if(sailsResponse.status === 400 || 404) {
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
            $scope.signinForm.loading = false;
        });
    };

}]);