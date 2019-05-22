// module
var app = angular.module('app', []);
const dep = ['$scope', '$http'];
/**
 * Main Controller
 * Init NGJS and fetch kata json dto
 */
app.controller('mainCtrl', [
  ...dep,
  ($scope, $http) => {
    $http.get('./json/products.json').then(response => {
      console.log(response);
      $scope.data = response.data;
      $scope.pageItemCount = response.data.length;
      $scope.totalCount = response.data.length;
    });

    $scope.menu = [
      'Women',
      'Men',
      'Kids',
      'Accessories',
      'Clearance',
      'Brands'
    ];
  }
]);
