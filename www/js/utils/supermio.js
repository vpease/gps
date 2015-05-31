/**
 * Created by vpease on 26/03/15.
 */
angular.module('Super',[])

/* Detectar si es movil o desktop */
.factory ('Super',function(){
    self.mobile='';

    var isMobile = {
        Android: function() {
            return navigator.userAgent.match(/Android/i)|| false;
        },
        BlackBerry: function() {
            return navigator.userAgent.match(/BlackBerry/i)|| false;
        },
        iOS: function() {
            return navigator.userAgent.match(/iPhone|iPad|iPod/i)|| false;
        },
        Opera: function() {
            return navigator.userAgent.match(/Opera Mini/i)|| false;
        },
        Windows: function() {
            return navigator.userAgent.match(/IEMobile/i) || navigator.userAgent.match(/WPDesktop/i)|| false;
        },
        any: function() {
            return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
        }
    };
    function completar(cadena,long){
        if (cadena.length < long){
            cadena = "0"+cadena;
        };
        return cadena;
    };
    return {
        set: function(){
            self.mobile = isMobile.any();
            console.log ('Es mobile: '+isMobile.any());
        },
        getMobile: function() {
            return self.mobile;
        },
        getDate : function(format) {
            var temp = new Date();
            var res ;
            if (format==="long"){
                var dia = completar(temp.getDate(),2);
                var mes = completar(temp.getMonth()+1,2);
                var anio = completar(temp.getFullYear(),2);
                var hora = completar(temp.getHours(),2);
                var min = completar(temp.getMinutes(),2);
                var seg = completar(temp.getSeconds(),2);
                res = anio + "-"+mes+"-"+dia + " "+hora+":"+min +":"+seg;
            } else {
                res = temp.getTime();
            };
            return res;
        }
    }
})

