<?php
$nombre = $_POST['nombre'];
$email = $_POST['email'];
$subject = $_POST['subject'];
$mensaje = $_POST['mensaje'];

$to = "kroalca@gmail.com";
$header = "From: ".$email." Name: ".$nombre."\r\n";
$header .= "Reply-To: noreply@example.com"."\r\n";
$header .= "X-Mailer: PHP/".phpversion();
 
mail($to, $subject, $mensaje, $header);

echo json_encode("Enviado".$nombre."\r\n".$email."\r\n".$mensaje."\r\n");
?>