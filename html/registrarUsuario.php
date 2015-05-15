<?php
	require_once("conectar.php");
	$correo = $_POST["correoDonador"];
	$password = $_POST["passDonador"];
	$nombreD = $_POST["nombreDonador"];
	$tipoS = $_POST["tipoSDonador"];
	$fechaUD = $_POST["fechaUDonador"];
	$donadorPrevio = $_POST["donadorPrevio"];

	$qry = "INSERT INTO `usuarios`(`correo`, `password`, `donadorPrevio`, `fechaUltima`, `nombre`, `tipoSangre`) VALUES ('$correo','$password','$donadorPrevio',STR_TO_DATE('$fechaUD', '%m/%d/%Y'),'$nombreD','$tipoS');";
echo $qry;
if(!mysqli_query($conexion, $qry)) {
	echo "Nombre de usuario existente";
}
mysqli_close($conexion);


?>