angular
    .module('DraftboardModule')
    .controller('DraftboardCtrl', ['$scope', '$http', function($scope, $http) {

        // Setup DraftboardForm loading state
        $scope.draftboardForm = {
            loading: false
        }

        $scope.attributes = {};
        $scope.attributes.playerName = '';
        $scope.attributes.position = '';

        io.socket.get('/draftselection', function(data) {
            $scope.attributes.playerName = data;
            $scope.attributes.position = data;
            $scope.$apply();
        });

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
                owner: 'Jake'
            },
            {
                owner: 'Jensen'
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
                owner: 'Danny'
            }
        ];

        // ARRAY OF OWNERS
        $scope.owners2 = [
            {
                owner: 'Jensen'
            },
            {
                owner: 'Jordan'
            },
            {
                owner: 'Brayden'
            },
            {
                owner: 'Mack'
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
                owner: 'Joe'
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
                owner: 'Jensen'
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
    }]);

    