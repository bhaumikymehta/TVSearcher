angular.module('show.controller', [])

	.controller('ShowController', function ($scope, shw) {

    $scope.shw=shw;

    // $scope.viewshow = function(){
    //   ShowService.query({id: $scope.id}, function(response){
    //
    //       $scope.shw= response.show;
    //   });
    // };
});
