<?php

if (isset($_POST['envoyer'])) {
    $message = "Toute l'équipe d'Aformac Berry vous souhaite de bonnes fêtes\n\n";
    $message .= "http://dcl.cartes.18pixel.fr/Trefle/index.php";

    $from = 'contact@aformac.fr';

    $to = $_POST['email'];

    $subject = "Joyeux Noël de la part d'Aformac Berry";

    $headers = 'From:'.$from;

    mail($to, utf8_decode($subject),utf8_decode($message), $headers);
}

?> 