angular.module('Angello.Login')
    .controller('LoginCtrl',
        function ($scope, $location, $log, LoginService) {
            var login = this;

            LoginService.login({
              container: 'login-container'
            }, function() {
              $location.path('/');
            }, function(error) {
              $log.error("로그인을 처리하는 동안 오류가 발생했습니다: ", error);
            });
        });
