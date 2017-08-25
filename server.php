<?php


    $name = $_POST['client-name'];
    $phone = $_POST['client-phone'];
    $street = $_POST['address-street'];
    $building = $_POST['address-building'];
    $site = $_POST['address-site'];
    $flat = $_POST['address-flat'];
    $floor = $_POST['address-floor'];
    $comment = $_POST['comment'];
    $payment = $_POST['payment'];
    $callback = $_POST['callback'];
   $callback = isset($callback) ? 'Не перезванивать' : 'Перезвонить';

   $mail_message = '
    <html>
        <head>
            <title>Заявка</title>
        </head>
        <body>
            <h2>Заказ на доставку</h2>
            <ul>
                <li> Имя клиента: ' . $name . '</li>
                <li> Телефон: ' . $phone . '</li>
                <li> Улица: ' . $street . '</li>
                <li> Дом: ' . $building . '</li>
                <li> Строение: ' . $site . '</li>
                <li> Квартира: ' . $flat . '</li>
                <li> Этаж: ' . $floor . '</li>
                <li> Комментарий к заказу: ' . $comment . '</li>
                <li> Способ платежа: ' . $payment . '</li>
                <li> Обратный звонок: ' . $callback . '</li>
            </ul>
        </body>
    </html>
    ';

    $headers = "From: Администратор сайта <usp-evgeniya@yandex.ru>\r\n".
    "MIME-Version: 1.0\r\n" .
    "Content-type: text/html; charset=UTF-8\r\n";

    $mail = mail("usp-evgeniya@yandex.ru", "Заказ", $mail_message, $headers);

    if ($mail) {
        $data['status'] = "OK";
        $data['mes'] = "Письмо успешно отправлено";
    }else{
        $data['status'] = "ERROR";
        $data['mes'] = "На сервере произошла ошибка";
    }

    echo json_encode($data);

?>