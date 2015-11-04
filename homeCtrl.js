angular.module('directivePractice').controller('homeCtrl', function ($scope, weatherService) {

    $scope.users =

    [
        {
            name: "Geoff McMammy",
            age: 43,
            email: "geofdude@gmail.com",
            city: "Provo"
        },
        {
            name: "Frederick Deeder",
            age: 26,
            email: "fredeed@gmail.com",
            city: "Austin"
        },
        {
            name: "Spencer Rentz",
            age: 35,
            email: "spencerrentz@gmail.com",
            city: "Sacramento"
        },
        {
            name: "Geddup Ngo",
            age: 43,
            email: "geddupngo@gmail.com",
            city: "Orlando"
        },
        {
            name: "Donst Opbie Leevin",
            age: 67,
            email: "gernee@gmail.com",
            city: "Phoenix"
        },
        {
            name: "John Doe",
            age: 33,
            email: "email@gmail.com",
            city: "Salt Lake City"
        }
    ]

    $scope.getWeather = function (city) {
        return weatherService.getWeather(city);
    }






});