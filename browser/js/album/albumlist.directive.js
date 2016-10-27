// <album-list albums="artist-albums">
juke.directive('albumList', function(){
  return {
    restrict: 'E',
    templateUrl: '/js/album/templates/albumlist.html',
    scope: {
      albums: "="
    }
  }

});

