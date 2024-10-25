<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'assets/vendor/PHPMailer/src/Exception.php';
require 'assets/vendor/PHPMailer/src/PHPMailer.php';
require 'assets/vendor/PHPMailer/src/SMTP.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $subject = $_POST['subject'];
    $message = $_POST['message'];

    // Buat instance dari PHPMailer
    $mail = new PHPMailer(true);

    try {
        // Konfigurasi server SMTP
        $mail->isSMTP();
        $mail->Host       = 'smtp.gmail.com';
        $mail->SMTPAuth   = true;
        $mail->Username   = 'qomartop14@gmail.com'; // Ganti dengan email pengirim
        $mail->Password   = 'hitbvqddegywfqdp';    // Ganti dengan App Password
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
        $mail->Port       = 587;

        // Pengaturan pengirim dan penerima
        $mail->setFrom($email, $name);                  // Email dan nama yang diinput di form
        $mail->addAddress('qomartop14@gmail.com');      // Email penerima (emailmu)

        // Konten email
        $mail->isHTML(true);
        $mail->Subject = $subject;
        $mail->Body    = "
            <h3>Detail Pesan:</h3>
            <strong>Nama:</strong> $name<br>
            <strong>Email:</strong> $email<br>
            <strong>Subjek:</strong> $subject<br>
            <strong>Pesan:</strong><br>
            <p>$message</p>
        ";

        $mail->send();
        $response['status'] = 'success';
        $response['message'] = 'Pesanmu sudah terkirim. Terima Kasih!';
    } catch (Exception $e) {
        $response['status'] = 'error';
        $response['message'] = "Pesanmu tidak terkirim. Mailer Error: {$mail->ErrorInfo}";
    }

    // Return response as JSON
    header('Content-Type: application/json');
    echo json_encode($response);
} else {
    echo "Invalid request.";
}
