var soal4 = angular.module('soal4',[]);

soal4.controller('inputan', ['$scope', function($scope) {
  $scope.select = '0';
  $scope.dataSelection = {
  	'0': '-- Pilihan Nama User --',
  	'1': 'Budi',
  	'2': 'Icha',
  	'3': 'Fajar',
  	'4': 'Candra',
  	'5': 'Anton',
  	'6': 'Winny',
  	'7': 'Danu',
  };  
  $scope.dataSelectionKeys = Object.keys($scope.dataSelection)
}]);