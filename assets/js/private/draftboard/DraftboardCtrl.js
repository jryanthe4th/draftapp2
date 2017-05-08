var myApp = angular.module('DraftboardModule', ['toastr', 'ngAnimate', 'ui.bootstrap']);

////////////////////////////
// DRAFTBOARD CONTROLLER
////////////////////////////
myApp.controller('DraftboardCtrl', ['$scope', '$http', 'toastr', '$uibModal', function($scope, $http, toastr, $uibModal) {

    var cachebuster = 1;

    // Setup DraftboardForm loading state
    $scope.draftboardForm = {
        loading: false
    }

    $scope.attributes = {};
    $scope.attributes.playerName = '';
    $scope.attributes.position = '';
    $scope.position = '';

        io.socket.get('/draftselection', function(data) {
            $scope.attributes.playerName = data;
            $scope.attributes.position = data;
            $scope.$apply();
        });

        $scope.set_color = function(position) {
            if(position.position == 'QB') {
                return { background: '#FFABF1' }
            }
            else if(position.position == 'RB') {
                return { background: '#ABFFB9' }
            }
            else if(position.position == 'WR') {
                return { background: '#ABF1FF' }
            }
            else if(position.position == 'TE') {
                return { background: '#FF8770' }
            }
            else if(position.position == 'DST') {
                return { background: '#F1FFAB' }
            }
            else if(position.position == 'K') {
                return { background: '#F1FFAB' }
            }
        }

        // ARRAY OF ROUNDS
        $scope.rounds = [
            {
                round: 'Round 1'
            },
            {
                round: 'Round 2'
            },
            {
                round: 'Round 3'
            },
            {
                round: 'Round 4'
            },
            {
                round: 'Round 5'
            }
        ];

        // ARRAY OF OWNERS
        $scope.owners1 = [
            {
                owner: 'Jensen'
            },
            {
                owner: 'Mack'
            },
            {
                owner: 'Brayden'
            },
            {
                owner: 'Jake'
            },
            {
                owner: 'Jake'
            },
            {
                owner: 'Purk'
            },
            {
                owner: 'Jensen'
            },
            {
                owner: 'Jensen'
            },
            {
                owner: 'Joe'
            },
            {
                owner: 'Canaan'
            },
            {
                owner: 'Riley'
            },
            {
                owner: 'Joe'
            }
        ];

        // ARRAY OF OWNERS
        $scope.owners2 = [
            {
                owner: 'Jordan'
            },
            {
                owner: 'Jensen'
            },
            {
                owner: 'Brayden'
            },
            {
                owner: 'Brayden'
            },
            {
                owner: 'Jake'
            },
            {
                owner: 'Jake'
            },
            {
                owner: 'Joe'
            },
            {
                owner: 'Danny'
            },
            {
                owner: 'Purk'
            },
            {
                owner: 'Canaan'
            },
            {
                owner: 'Austin'
            },
            {
                owner: 'Purk'
            }
        ];

        // ARRAY OF OWNERS
        $scope.owners3 = [
            {
                owner: 'Nick'
            },
            {
                owner: 'Mack'
            },
            {
                owner: 'Jensen'
            },
            {
                owner: 'Austin'
            },
            {
                owner: 'Riley'
            },
            {
                owner: 'Jordan'
            },
            {
                owner: 'Brayden'
            },
            {
                owner: 'Nick'
            },
            {
                owner: 'Purk'
            },
            {
                owner: 'Canaan'
            },
            {
                owner: 'Riley'
            },
            {
                owner: 'Purk'
            }
        ];

        // ARRAY OF OWNERS
        $scope.owners4 = [
            {
                owner: 'Jensen'
            },
            {
                owner: 'Mack'
            },
            {
                owner: 'Brayden'
            },
            {
                owner: 'Austin'
            },
            {
                owner: 'Jake'
            },
            {
                owner: 'Jordan'
            },
            {
                owner: 'Joe'
            },
            {
                owner: 'Nick'
            },
            {
                owner: 'Danny'
            },
            {
                owner: 'Jensen'
            },
            {
                owner: 'Riley'
            },
            {
                owner: 'Canaan'
            }
        ];

        // ARRAY OF OWNERS
        $scope.owners5 = [
            {
                owner: 'Jensen'
            },
            {
                owner: 'Mack'
            },
            {
                owner: 'Brayden'
            },
            {
                owner: 'Austin'
            },
            {
                owner: 'Jake'
            },
            {
                owner: 'Jordan'
            },
            {
                owner: 'Joe'
            },
            {
                owner: 'Nick'
            },
            {
                owner: 'Danny'
            },
            {
                owner: 'Canaan'
            },
            {
                owner: 'Riley'
            },
            {
                owner: 'Purk'
            }
        ];


        $scope.open = function() {

            var uibModalInstance = $uibModal.open({
                templateUrl: 'table.html',
                controller: 'uibModalInstanceCtrl'
            });
            uibModalInstance.result.then(function(newAttribute) {
                $scope.attributes.playerName.push(newAttribute);
            });
        };

    }]);


///////////////////////////
// MODAL CONTROLLER
///////////////////////////
myApp.controller('uibModalInstanceCtrl', ['$scope', '$http', '$uibModalInstance', function($scope, $http, $uibModalInstance) {
    $scope.submitDraftboardForm = function() {

        // Submit a draft selection
        $scope.draftboardForm.loading = true;

        $http.post('/draftboard', {

            playerName: $scope.draftboardForm.playerName,
            position:   $scope.draftboardForm.position

        })
        .then(function onSuccess(sailsResponse) {
            // window.location = '/';
        })
        .catch(function onError(sailsResponse) {
            console.log(err);
        })
        .finally(function eitherWay() {
            $scope.draftboardForm.loading = false;
        });

        $uibModalInstance.close({
            'playerName': $scope.draftboardForm.playerName,
            'position': $scope.draftboardForm.position
        });
    };

    $scope.cancel = function() {
        $uibModalInstance.dismiss('cancel');
    };
}]);
    