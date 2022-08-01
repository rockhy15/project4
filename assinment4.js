var app = angular.module('myApp', [])
app.controller('myCtrl', function ($scope) {
  $scope.searchItems = [
    {
      section: 'boys',
      id: 1,
      name: 'Product : Royal Enfield',
      desc: 'Description : Mileage 35km/l',
      Image: 'images/royal.jpg',
      price: "1,80,000",
    },
    {
      section: 'boys',
      id: 2,
      name: 'Product : Duke',
      desc: 'Description : Mileage 30km/l ',
      Image: 'images/duke.jpg',
      price: 'Price : 2,00,000',
    },
    {
      section: 'boys',
      id: 3,
      name: 'Product : Pulsar ',
      desc: ' Description : Mileage 40km/l',
      Image: 'images/pulsar.jpg',
      price: ' Price : 1,50,000',
    },
    {
      section: 'boys',
      id: 4,
      name: 'Product : RX100',
      desc: ' Description : Mileage 40km/l ',
      Image: 'images/rx100.jpg',
      price: ' Price :1,20,000',
    },
    {
      section: 'boys',
      id: 5,
      name: 'Product : R15',
      desc: ' Description : Mileage 35km/l',
      Image: 'images/r15.jpg',
      price: ' Price : 2,23,000',
    },
    {
      section: 'boys',
      id: 6,
      name: 'Product : Avenger',
      desc: ' Description : mileage 45km/l',
      Image: 'images/avenger.jpg',
      price: ' Price : 1,75,000',
    },


  ]
  $scope.foundList = []
  $scope.message = ''
  $scope.isVisible = false
  $scope.show = function (item) {
    $scope.isVisible = $scope.isVisible ? false : true
  }
  $scope.add = function (item) {

    if (item) {

      $scope.foundList.push({

        name: item.name,
        desc: item.desc,

        price: item.price,

        Image: item.Image,

      });

    }

  };




  $scope.remove = function (add) {
    if (add)

      $scope.foundList.splice($scope.foundList.indexOf(add), 1)

  }
});