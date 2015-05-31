angular.module('device',['ngCordova','ionic','Super'])
.factory('Device',function($cordovaDevice,
                           $ionicPlatform,
                           Super){
    var currentDevice = {
        _id : '',
        cordova : '',
        model : '',
        platform : '',
        uuid : '',
        version : '',
        type : 'device'
    };
    var Device = function(){
        currentDevice._id = "dev_"+Super.getDate("mil")
    };
    Device.prototype.getInfo = function(){
        if (ionic.Platform.platform()==="win32"){
            currentDevice.cordova = '4';
            currentDevice.model = 'PC';
            currentDevice.platform = 'Win32';
            currentDevice.uuid = '010101010101';
            currentDevice.version = 'Win10';
        } else {
            currentDevice.cordova = $cordovaDevice.getCordova();
            currentDevice.model = $cordovaDevice.getModel();
            currentDevice.platform = $cordovaDevice.getPlatform();
            currentDevice.uuid = $cordovaDevice.getUUID();
            currentDevice.version = $cordovaDevice.getVersion();
        };

        return currentDevice;
    };
    return Device;
})
