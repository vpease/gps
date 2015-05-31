angular.module('app',['session','db'])
.factory('App',function($state,Session,data){
    var currentApp = {
        _id : '',
        name : '',
        author : '',
        company : '',
        type : 'app'
    };
    var currentSession;

    var log = {
        _id : '',
        app : '',
        session : '',
    };
    return {
        initApp : function(){
            currentApp.name = 'SuperGPS';
            currentApp.author = 'VMPS';
            currentApp.company = 'Supermio';
            currentApp._id = 'SuperGPS'
            currentSession = new Session();
        },
        getSession : function(){
            return currentSession.get();
        },
        authenticate : function(user,pass){
            if (currentSession.setUsuario(user,pass,'test','supermio')){
                $state.go('main');
            } else {
                $state.go('login')
            };

        },
        getPosition : function(location){
            currentSession.currentLocation = location;
        }
    };
});
