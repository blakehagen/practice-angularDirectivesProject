angular.module('directivePractice').directive('dirDisplay', function () {

    return {
        templateUrl: 'app/dirDisplayTmpl.html',
        scope: {
            user: '=',
            weather: '&',
        },


        link: function (scope, elem, attrs) {
            scope.details = false;

            elem.on('click', function () {
                // console.log('clicked');
                scope.details = !scope.details;
                scope.$apply();
            })
        },
        
        
        controller: function($scope){
            $scope.weather({city: $scope.user.city}).then(function(response){
                $scope.userWeather = response.Weather;
                $scope.userTemp = response.Temperature;
                
            })
            
            
            
            
        }
    }




});