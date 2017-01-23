angular
    .module('DashboardModule')
    .controller('DashboardCtrl', ['$scope', '$http', function($scope, $http) {

        $scope.attributes = {};
        $scope.attributes.leagueName = '';

        io.socket.get('/league', function(data) {;
            $scope.attributes.leagueName = data;
            $scope.$apply();
        });

}]);





        // app.get('/', (req, res) => {
        //   db.collection('league').find().toArray((err, result) => {
        //     if (err) return console.log(err)
        //     // renders index.ejs
        //     res.render('index.ejs', {quotes: result})
        //   })
        // })