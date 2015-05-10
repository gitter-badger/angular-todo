angular.module('App', [])
.controller('MainController', ['$scope', '$filter', function($scope, $filter){
//Make Controller via module-oject's controller-method

  $scope.todos = [];
  //TODO LIST

  $scope.newTitle = '';

  $scope.addToDo = function(){
    $scope.todos.push({
      title: $scope.newTitle,
      done: false
    });

    $scope.newTitle = '';
  };

  $scope.filter = {
    //Filtering credintion model
    done: { done:true },
    //done
    remaining: { done: false }
    //no done
  };
  $scope.currentFilter = null;
  //Present filter's credential model

  $scope.changeFilter = function(filter){
    //Change method to filtering credential
    $scope.currentFilter = filter;
  };

  var where = $filter('filter');
  //Get filter function
  $scope.$watch('todos', function(todos){
    var length = todos.length;

    $scope.allCount = length;
    //model all number
    $scope.doneCount = where(todos, $scope.filter.done).length;
    //model that done
    $scope.remainingCount = length - $scope.doneCount;
    //model that no done
  }, true);

  var originalTitle;
  //matter that no edit
  $scope.editing = null;
  //model that edit-mode

  $scope.editTodo = funtion(todo){
    originalTitle = todo.title;
    $scope.editing = todo;
  };
}]);
