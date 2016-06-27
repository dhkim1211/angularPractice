app.factory('movieStubFactory', function ($resource) {
    return $resource('/movies');
});