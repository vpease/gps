angular.module('session',['user','location','device','Super'])
.factory('Session',function($rootScope,Device,Location,User,Super){
    var session = {
        _id : '',
        currentUser : '',
        currentLocation : '',
        currentDevice : '',
        created : '',
        createdMil : '',
        status : ''
    };
    var Session = function() {
        var self = this;
        session.created = Super.getDate("long");
        session.createdMil = Super.getDate("mil");
        session.currentDevice = getDevice();
        session.currentLocation = getLocation();
        session.status ='Iniciado';
        session._id = "session_"+Super.getDate("mil") +'_'+ session.currentDevice.uuid;
    };
    Session.prototype.setUsuario = function (id,pass,name,group,company) {
        var temp = new User(id,pass,name,group,company);
        session.currentUser = temp.authenticate();
        if (session.currentUser.active) {
            return true;
        } else return false;
    };
    Session.prototype.get = function(){
        return session;
    };
    function getDevice(){
        var temp = new Device();
        return temp.getInfo();
    };
    function getLocation() {
        var temp = new Location();
        $rootScope.$broadcast('Location:Search');
        temp.getNewPosition().then(function(position){
            temp.setPosition(position);
            session.status = 'Valido';
            session.currentLocation = temp.getCurrent();
            console.log('La sesion ya tiene posicion: '+JSON.stringify(session));
            $rootScope.$broadcast('Location:Ok',temp);
        }, function(err){
            console.log('Error en la posición: '+err);
        });
        return new Location().getCurrent();
    };
    return Session;
})
