<?php
    require 'conexion.php';
    $consulta = "INSERT INTO solicitudes (nombre,numDonadores,dir,contacto,tipoSangre) VALUES('" . $_POST["nombre"] . 
            "','" . $_POST["numDonadores"] . "','" . $_POST["dir"] . "','" .
            $_POST["contacto"] . "', 'A +')";
    $result = mysql_query($consulta, $conexion)or die(mysql_error());
    require 'desconexion.php';
    ?>
    <script languaje="javascript">
        alert("Solicitud registrada");
        location.href = "index.html";
    </script>
    <?php

