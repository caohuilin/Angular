
function PhoneListCtrl($scope){
    $scope.phones = [
        {name:2,age:4},{name:1,age:2},{name:3,age:0}
    ]
}

function PhoneDetailCtrl($scope, $routeParams) {
    $scope.phoneId = $routeParams.phoneId;
}