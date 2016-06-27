app.factory('movieStubFactory', function ($resource) {
    return $resource('/movies');
});
app.factory('movieStubBookingsFactory', function ($resource) {
    return $resource('/bookings');
});