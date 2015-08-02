var app =  angular.module('sign_app',[]);

app.controller('appme', function ($scope,$http) {
      console.log('i am awesome');
     $scope.signupclick = function () {

       console.log($scope.signup);
         $http.post('/signup',$scope.signup).success(function (response) {
             console.log(response);
             $scope.sum=response;
         });

   } 
});