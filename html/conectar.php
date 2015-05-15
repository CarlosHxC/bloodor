<?php 
	$_server = "localhost";
	$_db = "bloodor";
	$_user = "root";
	$_pass = "";

	$conexion = mysqli_connect($_server, $_user, $_pass)
		or die("Error");

	mysqli_select_db($conexion, $_db);

	if($conexion) {
		echo "Exito";
	} else {
		echo "error";
	}
?>