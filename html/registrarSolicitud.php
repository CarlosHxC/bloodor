<?php

	require_once("conectar.php");

	$tipo =  $_POST["tipoSol"];
	$nombre = $_POST["nombreSol"];
	$donadores = $_POST["donadoresSol"];
	$acudir = $_POST["acudirSol"];
	$contacto = $_POST["contactoSol"];

	$qry = "INSERT INTO `solicitudes`(`tipo_sangre`, `nombre`, `no_donadores`,`ubicacion`, `contacto`) VALUES ('".$tipo."','".$nombre."',".$donadores.",'".$acudir."','".$contacto."');";
	echo $qry;
	mysqli_query($conexion, $qry);
	mysqli_close($conexion);
	//header("Location: index.html");
    
    
?>