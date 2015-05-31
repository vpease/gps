<?php
require("datamodel.php");

/**
 * Created by PhpStorm.
 * User: victormanuel
 * Date: 03/06/14
 * Time: 04:04 AM
 */
class persona{
    function getValor(){
        return "supermio";
    }

    /**
     * @param string $lat
     * @param string $lon
     * @param string $pres
     * @param string $bat
     * @param string $mac
     * @param string $fecha
     * @return string
     */
    function getPosicion($lat,$lon,$pres,$bat,$mac,$fecha){
        $res ='';
        error_log('En post tablas de tamaño:');

        $per = new posicion($lat,$lon,$pres,$bat,$mac,$fecha);
        $res = $per->save();
        error_log('El resultado es : '+$res);
        return $res;
    }
}
