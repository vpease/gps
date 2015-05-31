angular.module('user',['Super'])
.factory('User',function(Super){
    var currentUser = {
        _id : '',
        user : '',
        name : '',
        group : '',
        company : '',
        created : '',
        hash : '',
        active : false,
        type : 'user'
    };
    var User = function(id, pass, name,group,company){
        currentUser._id = 'user_'+id;
        currentUser.user = id;
        currentUser.name = name;
        currentUser.group = group;
        currentUser.company = company;
        currentUser.created = 000000;
        currentUser.hash = CryptoJS.Rabbit.encrypt("app-"+pass,pass);
    };
    User.prototype.get = function(){
        var self = this;
        return currentUser;
    };
    User.prototype.authenticate = function() {
        var self = this;
        if (currentUser.user ==="vpease") {
            currentUser.created = Super.getDate("mil");
            currentUser.active = true;
        }
        else currentUser.active = false;
        return currentUser;
    };
    return User;
})
