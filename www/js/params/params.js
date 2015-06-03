angular.module('Params',['Super'])
.factory('params',function(Base64){
    var protAuth = 'http://';
    var protAPI = 'https://';
    var keyAPI='ngstorturtheasublegrawai';
    var passAPI='cXdWtacPSDf5ncp5adYs3Cwo';
    var dbServer = 'supermio.cloudant.com/superkiosko';
    var urlAPI = 'superkiosko.supermio.com/_all_docs';
    var dbName ='superkiosko';
    var dbTimeOut = '60000';

    return {
        getDbName: function(){
            return dbName;
        },
        getDbUrl: function(){
            return protAPI+keyAPI+':'+passAPI+'@'+dbServer;
        },
        getKeyAPI: function(){
            return keyAPI;
        },
        getPassAPI: function(){
            return passAPI;
        },
        getUrlAPI: function(params){
            return protAuth+urlAPI+'?include_docs=true&key="'+params.key+'"';
        },
        getAuthData: function(){
            return Base64.encode(keyAPI+':'+passAPI);
        },
        getDbTimeOut: function(){
            return dbTimeOut;
        }
    }
})
