function TaskCtrl($scope) {
  $scope.calc = {
    
  };

  $scope.result = function(){
    var res = 0;
    for(prop in $scope.calc)
    {
      if($scope.calc[prop])
        res += $scope.weight[prop];
    }
    return res;
  };

  $scope.weight = {
    cSharp:1,
    js:2,
    html:1,
    css:2,
    sql:2,
    ui:1,
    uiServices:2,
    domainServices:2,
    domainModel:1,
    dataAccess:2,
    validation:1,
    infrastructure:4,
    mvc:1,
    backbone:3,
    ef:2,
    bootstrap:2
  };
}