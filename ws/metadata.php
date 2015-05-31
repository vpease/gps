<?php
require_once('dataConn.php');

if (!function_exists("GetSQLValueString")) {
    function GetSQLValueString($link,$theValue, $theType, $theDefinedValue = "", $theNotDefinedValue = "") {
        $theValue = get_magic_quotes_gpc() ? stripslashes($theValue) : $theValue;
        $theValue = function_exists("mysqli_real_escape_string") ? mysqli_real_escape_string($link,$theValue) : mysql_escape_string($theValue);
        switch ($theType) {
            case "text":
                $theValue = ($theValue != "") ? "'" . $theValue . "'" : "NULL";
                break;
            case "long":
            case "int":
                $theValue = ($theValue != "") ? intval($theValue) : "NULL";
                break;
            case "double":
                $theValue = ($theValue != "") ? "'" . doubleval($theValue) . "'" : "NULL";
                break;
            case "date":
                $theValue = ($theValue != "") ? "'" . $theValue . "'" : "NULL";
                break;
            case "defined":
                $theValue = ($theValue != "") ? $theDefinedValue : $theNotDefinedValue;
                break;
        }
        return $theValue;
    }
}

class MetaData extends dataConn {

    public function validAccess($usuario,$clave) {
        $res=0;
        $query = sprintf("select concat(idInstructor,':',idOperador,':',usuario,':',completo,':',date(now()),':',idLocal) as id from vwInstructores where  usuario=%s and clave=%s",
            GetSQLValueString($this->data,$usuario,"text"),
            GetSQLValueString($this->data,$clave,"text"));
        error_log('valid access query:'.$query);
        $row_rs = $this->getValue($query);
        error_log('valid access: ya pase el query');
        if (is_null($row_rs)) {
            $res = 0;
            error_log('valid access no hay regs');
        }
        else {
            $res= $row_rs;
            error_log('valid access si hay regs');
        }
        error_log('valid access: ya pase la validación:'.$res);
        return $res;
    }

    public function insert($lat,$lon,$pres,$bat,$mac,$fecha){
        $query = sprintf("insert into personas(latitud,longitud,presicion,bat,mac,fecha,copiado,panico) values (%s,%s,%s,%s,%s,%s,0,0)",
            GetSQLValueString($this->data,$lat,"text"),
            GetSQLValueString($this->data,$lon,"text"),
            GetSQLValueString($this->data,$pres,"text"),
            GetSQLValueString($this->data,$bat,"text"),
            GetSQLValueString($this->data,$mac,"text"),
            GetSQLValueString($this->data,$fecha,"text"));
        $row_rs = $this->getCommand($query);
        return $row_rs;
    }
}
?>
