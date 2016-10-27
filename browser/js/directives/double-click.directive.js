'use strict';

juke.directive('doubleClick', function(){
  return {
    restrict: 'A',
    scope: {
      doubleClick: '&'
    },
    link: function(scope, elem, attr){
      elem.on('dblclick', function(){
        scope.doubleClick();
        scope.$apply();
      });
    }
  };
});
