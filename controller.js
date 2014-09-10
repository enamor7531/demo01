/*global $ */
/*global angular */
'use strict';

/* Directives */
angular.module('demo01', ['ui.bootstrap']);
  var controlDemo01= function($scope, $modal, $log) {
      var key = 1000
      $scope.checked = false
      $scope.lists = []
      $scope.edds = []
      $scope.addList = function(list) {
        if (!list) {
          return;
        }
        var newList = list
        newList.done = false
        $scope.lists.push(newList)
        delete $scope.newList
        //console.log($scope.lists[0])
      }
      $scope.editList = function(){   
        //console.log(list)
        $scope.lists[$index] = list
        console.log($scope.lists[$index])
      }
      $scope.edd = function($index,edit){        
        $scope.edit= {name:$scope.lists[$index].name}
      }
      $scope.deleteList = function($index) {
        $scope.lists.splice($index, 1)
        if (!$index) {
          return;
        }
      }
      ////////////
      $scope.open = function (lists,$index) {
       
        //console.log($index)
        var modalInstance = $modal.open({
          templateUrl: 'myModalContent.html',
          controller: ModalInstanceCtrl,
          size:'sm',
          resolve: {
            lists: function() {return $scope.lists; },
            $index: function() {return $index; }
          },
               
        
        });

        
      
      };
      

  };




  var ModalInstanceCtrl = function ($scope, $modalInstance,lists,$index ) {

    //console.log(lists)
    
    
    $scope.finish = function () {
     lists[$index].done = true
     $modalInstance.close();
     //console.log(lists[$index].done)
    };
    

    $scope.notyet = function () {
      alert('Please hurry up')
     $modalInstance.close();
    };
  };
  

