<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Récupérer les données du formulaire
    $name = $_POST['name'];
    $email = $_POST['email'];
    $subject = $_POST['subject'];
    $message = $_POST['message'];

    // Adresse e-mail de destination
    $to = "capucine.fauroux@gmail.com";
    
    // Sujet de l'e-mail
    $email_subject = "Nouveau message de contact : $subject";
    
    // Corps de l'e-mail
    $email_body = "Vous avez reçu un nouveau message de contact.\n\n".
                  "Nom: $name\n".
                  "Email: $email\n".
                  "Message:\n$message";
    
    // En-têtes de l'e-mail
    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";
    
    // Envoyer l'e-mail
    if (mail($to, $email_subject, $email_body, $headers)) {
        echo "Merci pour votre message. Il a été envoyé avec succès.";
    } else {
        echo "Erreur lors de l'envoi de votre message. Veuillez réessayer plus tard.";
    }
}
?>
