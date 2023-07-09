<?php

	// Cargamos las librerias de la carpeta libraries
	require_once 'config/configurar.php';
	require_once 'helpers/url_helper.php';

	// Autoload
	spl_autoload_register( function($nombreClase) {
		require_once 'libraries/' . $nombreClase . '.php';
	});