angular.module('search.controller', [])

	.controller('SearchController', function ($scope, SearchService) {

    $scope.shows=[];
  	$scope.showsearch = function(){
			$scope.shows=[];
	  	
			SearchService.query({showname: $scope.showname}, function(response){
        for(var i=0; i<response.length; i++){

          var summary= response[i].show.summary;
          var summ=document.createElement("div");
          summ.innerHTML=summary;
          var text=summ.textContent || summ.innerText || "";
          response[i].show.summary=text;
          $scope.shows.push(response[i].show);
        }
			});
		};
})
.directive("displayresults",function(){
  return {
    template: '<div>'+
			'<p ng-repeat="shw in shows">'+
					'<b>{{shw.name}}</b><br/>'+
					'<img src="{{shw.image.medium}}"/><br/>'+
          '{{ shw.summary}}<br>'+
					'<a href="/shows/{{shw.id}}" class="btn -btn-warning">Details</a>'+
      '</p>'+

    '</div>'
  };
});
