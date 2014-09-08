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
      $scope.edds = []
      $scope.editList = function(edit){


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
      $scope.editList = function($index,list){
        
        //$scope.edit = {name:$scope.lists[$index]}
        console.log(list)
        $scope.lists[$index] = list
        console.log($scope.lists[$index])
        //console.log($scope.lists[$index])
        //console.log($index)
        //console.log($scope.lists[$index])
      }
      $scope.edd = function($index,edit){
        //console.log($scope.lists[$index].name)
        $scope.edit= {name:$scope.lists[$index].name}
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
