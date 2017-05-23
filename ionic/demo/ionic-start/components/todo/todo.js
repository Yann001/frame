var app = angular.module('todo', ['ionic'])

app.controller('todoCtrl', function ($scope, $ionocModal) {
  // 初始化数据
  $scope.tasks = [
    { title: 'coding' },
    { title: 'Reading' },
    { title: 'Listening' },
    { title: 'Sleeing'}
  ];
  // 创建并载入模态框界面
  $ionocModal.fromTemplateUrl('new-task.html', function (modal) {
    $scope.taskModal = modal;
  }, {
    scope: $scope,
    animation: 'slide-in-up'
  });
  // 提交表单时调用
  $scope.createTask = function(task) {
    $scope.tasts.push({ title: task.title });
    $scope.taskModal.hide();
    task.title = '';
  }
  // 打开新增的模态框
  $scope.newTask = function () {
    $scope.taskModal.show();
  }
  // 关闭模态框
  $scope.closeNewTask = function () {
    $scope.taskModal.hide();
  }
})
