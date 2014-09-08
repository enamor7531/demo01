/*global $ */
/*global angular */
'use strict';

/* Directives */
angular.module('demo01.controller', [])
  .controller("demo01", ['$scope', '$http', '$window',
    function($scope, $http, $window) {
      $scope.checked = false
      console.log('demo01')
      $scope.lists = []
      console.log($scope.lists)
      //var edit = $scope.lisy[$index]
      
      $scope.edd=function($index,edit){
      var x = document.getElementById("editx")
      x.value = $scope.lists[$index].name
      }

      //$scope.newList = {name:'you good'}
      $scope.addList = function(list) {
        if (!list) {
          return;
        }
        var newList = list
        newList.done = false
        $scope.lists.push(newList)
        delete $scope.newList
      }
      $scope.editList = function($index,edit){
      

        $scope.lists[$index] = edit
        //console.log($scope.lists[$index])
        //console.log($index)
        //console.log($scope.lists[$index])

      }
      $scope.deleteList = function($index) {
        //console.log($index)
        $scope.lists.splice($index, 1)
        if (!$index) {
          return;
        }
      }
      
    }
  ]);
