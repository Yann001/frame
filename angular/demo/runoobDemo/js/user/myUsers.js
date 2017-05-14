var app = angular.module("myApp", []);
app.controller("userController", function($scope) {
	$scope.users = [
		{ id: 1, fName: 'Hege', lName: "Pege" },
		{ id: 2, fName: 'Kim', lName: "Pim" },
		{ id: 3, fName: 'Sal', lName: "Smith" },
		{ id: 4, fName: 'Jack', lName: "Jones" },
		{ id: 5, fName: 'John', lName: "Doe" },
		{ id: 6, fName: 'Peter', lName: "Pan" }
	];
	$scope.fName = "";
	$scope.lName = "";
	$scope.pwd1 = "";
	$scope.pwd2 = "";
	$scope.edit = true;
	$scope.error = false;
	$scope.incomplete = false;
	$scope.editUser = function(id) {
		if(id == 'new') {
			$scope.edit = true;
			$scope.incomplete = true;
			$scope.fName = '';
			$scope.lName = '';
		} else {
			$scope.edit = false;
			$scope.fName = $scope.users[id - 1].fName;
			$scope.lName = $scope.users[id - 1].lName;
		}
	}
	$scope.validate = function() {
		if($scope.pwd1 !== $scope.pwd2) {
			$scope.error = true;
		} else {
			$scope.error = false;
		}
		//新建用户验证
		$scope.incomplete = false;
		if($scope.edit &&
			(!$scope.fName.length ||
				!$scope.lName.length ||
				!$scope.passw1.length ||
				!$scope.passw2.length)) {
			$scope.incomplete = true;
		}
	};
	$scope.$watch("fName", function() { $scope.validate(); });
	$scope.$watch("lName", function() { $scope.validate(); });
	$scope.$watch("pwd1", function() { $scope.validate(); });
	$scope.$watch("pwd2", function() { $scope.validate(); });
});