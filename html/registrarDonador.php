<?php
    require 'conexion.php';
    $consulta = "INSERT INTO donadores (nombre,tipoSangre,ultimaDonacion,correo,pass) VALUES('" . $_POST["nombre"] . 
            "','" . $_POST["tipoSangre"] . "','" . $_POST["fecha"] . "','" .
            $_POST["correo"] . "', '".$_POST["pass"]."')";
    $result = mysql_query($consulta, $conexion)or die(mysql_error());
    require 'desconexion.php';
    ?>
    <script languaje="javascript">
        alert("Donador registrado");
        location.href = "index.html";
    </script>
    <?php