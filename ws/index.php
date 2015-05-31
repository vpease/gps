<?php
/**
 * Created by PhpStorm.
 * User: victormanuel
 * Date: 03/06/14
 * Time: 04:05 AM
 */
require_once 'vendor/restler.php';
//use Luracast\Restler\Restler;
//use Luracast\Restler\Defaults;

//Defaults::$crossOriginResourceSharing = true;
//Defaults::$accessControlAllowOrigin = '*';
$r = new Restler();
$r->addAPIClass('persona');
//$r->addAPIClass('Resources');
$r->handle();
