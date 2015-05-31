<?php
require_once('metadata.php');

class posicion{
    public $lat;
    public $lon;
    public $pres;
    public $bat;
    public $mac;
    public $fecha;
    public $HoraServidor;
    public $copiado;
    public $panico;
    public function __construct($plat,$plon,$ppres,$pbat,$pmac,$pfecha)
    {
        $this->lat = $plat;
        $this->lon = $plon;
        $this->pres = $ppres;
        $this->bat = $pbat;
        $this->mac = $pmac;
        $this->fecha = $pfecha;
        $this->HoraServidor = '';
        $this->copiado = 0;
        $this->panico = 0;
    }
    public function save()
    {
        require('Connections/base.php');
        $cn = new MetaData($hostname_baseboca,$database_baseboca,$username_baseboca,$password_baseboca);
        return $cn->insert($this->lat,$this->lon,$this->pres,$this->bat,$this->mac,$this->fecha);
        //$worker = new workerUpdAsis($this->fecha,$fecha->ins,$fecha->asis);
        //$worker->start();
    }
}
?>
