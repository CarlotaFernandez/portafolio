<?php
    $destino = "carlotaferdom@hotmail.com";
    $nombre = $_POST["Nombre y apellidos"];
    $telefono = $_POST["Teléfono"];
    $correo = $_POST["Correo electrónico"];
    $mensaje = $_POST["Mensaje"];

    $contenido= "Nombre y apellidos: " . $nombre . "\nTeléfono: " . $telefono . "\nCorreo electrónico: " . $correo . "\nMensaje: " . $mensaje;

    mail($destino,"Contacto", $contenido);
    header("location:home.html")
?>