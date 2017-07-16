"use strict";

app.component('mainComponent',{
    controller: function($scope, gerListService){
        $scope.listView = gerListService.getData();
    },
     templateUrl:'views/listview.html'
     
})




