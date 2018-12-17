<?php

if (isset($_POST['letter'])) {
    $message = 'dcl.cartes.18pixel.fr/Trefle/index.php';

    $from = 'test@votredomaine.com';

    $to = $_POST['email'];

    $subject = "Joyeux Noël de la part d'Aformac Berry";

    $headers = 'From:'.$from;

    mail($to, $subject, $message, $headers);
}

?> 