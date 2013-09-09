function TaskCtrl($scope) {
  $scope.calc = {
    
  }

  $scope.result = function(){
    var res = 0;
    for(prop in $scope.calc)
    {
      if($scope.calc[prop])
        res += weight[prop];
    }
    return res;
  }
   
  $scope.weight = {
    cSharp:1,
    js:2
  }
}