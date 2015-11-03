angular.module('directivePractice').service('weatherService', function ($http, $q) {

    this.getWeather = function (city) {
        var deferred = $q.defer();

        $http({
            method: 'GET',
            url: 'http://api.openweathermap.org/data/2.5/weather?q=' + city + '&APPID=22b6bcc43eee9fe34975baf872172b70'
        }).then(function (response) {

            var weather = response.data.weather[0].main;
            var temp = Math.round(response.data.main.temp - 273.15) * (9 / 5) + 32;
            temp = Math.round(temp);

            var myWeatherObj = {
                Weather: weather,
                Temperature: temp
            }
            deferred.resolve(myWeatherObj)
        })
        return deferred.promise;



    }


});