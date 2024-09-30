(
    function(){
        angular.module("myfirstApp" , [])
        .controller("myfirtController" , MainFunction);
            
            MainFunction.$inject = ['$scope'];
            function MainFunction($scope){
            $scope.messagetm="";
            $scope.messagee="";
            $scope.messagepedf="";
            $scope.message1="Enjoy !!!!";
            $scope.message2="Too much :(";
            $scope.message3="please enter data first!!!!";
            $scope.input ="";

            $scope.clear = function(){
                $scope.messagetm="",$scope.messagee="",$scope.messagepedf="",$scope.input=""}

            $scope.result = function(){
                var aa = $scope.input;
                var bb = aa.split(",");
                console.log(bb.length);
                console.log(bb);
                if(bb.length < 4 && bb.length >= 2)($scope.messagee = $scope.message1)
                else if (bb.length > 3 )($scope.messagetm = $scope.message2)
                else if(bb.length < 2) ($scope.messagepedf = $scope.message3)
            }
        }
    }
)();