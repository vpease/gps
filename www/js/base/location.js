angular.module('location',['ngCordova','Super'])
.factory('Location',function($cordovaGeolocation,Super){
    var currentPosOptions = {
        timeout : 3000,
        enableHighAccuracy : false
    }
    var currentWatchOptions = {
        frequency : 1000,
        timeout : 3000,
        enableHighAccuracy : false
    }
    var currentLocation = {
        _id : '',
        lat : '',
        lon : '',
        alt : '',
        acc : '',
        hea : '',
        spe : '',
        ts : '',
        type : 'feature'
    };
    var status = false;
    var Location = function (){
        status = false;
    };
    Location.prototype.setPosition = function(position){
        currentLocation._id = 'loc_'+Super.getDate("mil");
        currentLocation.lat = position.coords.latitude;
        currentLocation.lon = position.coords.longitude;
        currentLocation.alt = position.coords.altitude;
        currentLocation.acc = position.coords.accuracy;
        currentLocation.hea = position.coords.heading;
        currentLocation.spe = position.coords.speed;
        currentLocation.ts = position.coords.timestamp;
        status = true;
    };
    Location.prototype.getCurrent = function() {
        var self = this;
        return currentLocation;
    };
    Location.prototype.getNewPosition = function() {
        return $cordovaGeolocation
            .getCurrentPosition(currentPosOptions);
    };
    return Location;
});
