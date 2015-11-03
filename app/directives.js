angular.module('directivePractice').directive('dirDisplay', function () {

    return {
        templateUrl: 'app/dirDisplayTmpl.html',
        scope: {
            user: '=', 
        },
        
        
        link: function (scope, elem, attrs) {
            scope.details = false;

            elem.on('click', function () {
                // console.log('clicked');
                scope.details = !scope.details;
                scope.$apply();
            })
        }
    }




});