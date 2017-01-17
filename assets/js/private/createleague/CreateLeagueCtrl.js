angular
    .module('CreateLeagueModule')
    .controller('CreateLeagueCtrl', ['$scope', '$http', function($scope, $http) {

    // Set createLeagueForm loading state
    $scope.createLeagueForm = {
        loading: false
    }

    // Submit createLeagueForm
    $scope.submitCreateLeagueForm = function() {

        $scope.createLeagueForm.loading = true;

        $http.post('/league', {

            leagueName      : $scope.createLeagueForm.leagueName,
            numberOfTeams   : $scope.createLeagueForm.numberOfTeams,
            numberOfRounds  : $scope.createLeagueForm.numberOfRounds 

        })
        .then(function onSuccess(sailsResponse) {
            window.location = '/draftboard';
        })
        .catch(function onError(sailsResponse) {
            console.log("An error occurred");
        })
        .finally(function eitherWay() {
            $scope.createLeagueForm.loading = false;
        });
    };

}]);