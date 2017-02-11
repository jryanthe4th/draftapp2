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

  // * For example, a BoatController with `rest` enabled generates the          *
  // * following routes:                                                        *
  // * :::::::::::::::::::::::::::::::::::::::::::::::::::::::                  *
  // *  GET /boat -> BoatController.find                                        *
  // *  GET /boat/:id -> BoatController.findOne                                 *
  // *  POST /boat -> BoatController.create                                     *
  // *  PUT /boat/:id -> BoatController.update                                  *
  // *  DELETE /boat/:id -> BoatController.destroy                              *
  // 
// app.get('/materials/:name', (req, res) => {
//     if (req.params.name) {
//         db.collection('materials').find({"material_name": req.params.name}).toArray(function(err, results) {
//             res.json(results);
//         });
//     }
// });


        // app.get('/', (req, res) => {
        //   db.collection('league').find().toArray((err, result) => {
        //     if (err) return console.log(err)
        //     // renders index.ejs
        //     res.render('index.ejs', {quotes: result})
        //   })
        // })
        // 

// angular.
//   module('core.phone').
//   factory('Phone', ['$resource',
//     function($resource) {
//       return $resource('phones/:phoneId.json', {}, {
//         query: {
//           method: 'GET',
//           params: {phoneId: 'phones'},
//           isArray: true
//         }
//       });
//     }
//   ]);