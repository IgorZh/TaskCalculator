function TaskCtrl($scope) {
  $scope.calc = {
    complexity:{},
    time:{}
  };

  $scope.units = {
      title: "Компоненты",
      description: "То, что нужно создать или изменить программисту.",
      layers:{
        ui:{
          title: "Формы",
          items:{
             newForm: { title: "Новые" },
             editForm: { title: "Расширение" },
             formLogic: { title: "Логика" },
          }
        },
        model:{
          title: "Модели",
          items:{
             newModel: { title: "Новые" },
             editModel: { title: "Расширение" },
             modelLogic: { title: "Логика" },
          }
        }
      }
    };

  $scope.measurements = {
    langs: {
      title: "Языки",
      description: "Языки, на которых придется писать программисту.",
      items:{
        cSharp: {title: "C#", description: "Если предпологается серверная часть, т.е. почти всегда."},
        js: {title: "JavaScript", description: "Если есть логика на клиентской части или используются компоненты (кобобокс, грид...)."},
        html: {title: "Html", description: "Если предпологается клиентская часть."},
        css: {title: "Css", description: "Если предпологается клиентская часть."},
        sql: {title: "Sql", description: "Если нужно создавать таблицы."},
      }
    },
    layers: {
      title: "Слои",
      description: "Слои приложения, затрагиваемые в задаче.",
      items:{
        ui: {title: "Ui", description: "Если предпологается клиентская часть."},
        uiServices: {title: "Ui Services", description: "Если создается новый Арм или меняется логика старого."},
        domainServices: {title: "Domain Services", description: "Если меняется доменная логика или создается новая."},
        domainModel: {title: "Domain Model", description: "Если создаются новые классы доменной модели или меняются старые."},
        dataAccess: {title: "Data Access", description: "Если добавляются свойства в модель или создется новая модель."},
        validation: {title: "Validation", description: "Если затрагивается валидация."},
        infrastructure: {title: "Infrastructure", description: 'Новый сервис. Например "рассылка писем".'},
      }
    },
    frameworks: {
      title: "Фреймворки",
      description: "Языки, на которых придется писать программисту.",
      items:{
        mvc: {title: "Mvc", description: "Если предпологается клиентская часть."},
        backbone: {title: "Backbone", description: "Изменине клиенских компонентов."},
        ef: {title: "Entity Framework", description: "Если добавляются свойства в модель или создется новая модель."},
        bootstrap: {title: "Bootstrap", description: "Если предпологается клиентская часть."},
      }
    },
    
  }

  $scope.complexity = function(){
    var res = 1;
    for(prop in $scope.calc.complexity)
    {
      if($scope.calc.complexity[prop])
        res += $scope.weight[prop];
    }
    return res.toFixed(2);
  };

  $scope.time = function(){
    var res = 0;
    for(prop in $scope.calc.time)
    {
      var count = $scope.calc.time[prop];
      if(count > 0)
        res += $scope.weight[prop] * count;
    }
    return res;
  };

  $scope.weight = {
    cSharp: 0.1,
    js: 0.2,
    html: 0.1,
    css: 0.2,
    sql: 0.2,
    ui: 0.1,
    uiServices: 0.2,
    domainServices: 0.2,
    domainModel: 0.1,
    dataAccess: 0.2,
    validation: 0.1,
    infrastructure: 0.4,
    mvc: 0.1,
    backbone: 0.3,
    ef: 0.2,
    bootstrap: 0.2,
    newForm: 3,
    editForm: 2,
    formLogic: 2,
    newModel: 1,
    editModel: 1,
    modelLogic: 2,
  };
}

