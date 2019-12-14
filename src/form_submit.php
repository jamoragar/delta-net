<?php
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Headers: Content-Type");
    header("Content-Type: application/json");

    $rest_json = file_get_contents("php://input");
    $_POST = json_decode($rest_json, true);


    if ($_SERVER['REQUEST_METHOD'] === "POST"){
        // set response code - 200 OK
        http_response_code(200);
        $subject = $_POST['name'];
        $to = "javier.moragarojas@gmail.com";
        $from = $_POST['email'];
        // data
        $msg = $_POST['message'];
        $date = date('j, F Y h:i A');
        
        $emailBody = "
            <html>
            <head>
                <title>$subject Quiere ponerse en contacto con usted.</title>
            </head>
            <body style=\"background-color:#fafafa;\">
                <div style=\"padding:20px;\">
                    Fecha: <span style=\"color:#888\">$date</span>
                    <br>
                    Email: <span style=\"color:#888\">$from</span>
                    <br>
                    Mensaje: <div style=\"color:#888\">$msg</div>
                </div>
            </body>
            </html>
        ";

        // Headers
        $headers = 	"From: Contacto deltanet.cl $from" . "\r\n" .
        "Reply-To: $from" . "\r\n" .
        "MIME-Version: 1.0\r\n" . 
        "Content-Type: text/html; charset=iso-8859-1\r\n";
        
        mail($to, $subject, $emailBody, $headers);
        

        // echo json_encode( $_POST );
        echojson_encode(array(
            "sent" => true
        ));
    }
    else
    {
    // tell the user about error
    echojson_encode(["sent" => false, "message" => "Something went wrong"]);
    }
?>