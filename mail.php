<?php

// // Получение данных полей формы
// $user_tag = trim($_POST['type']);
// $user_data = trim($_POST['name']);
// $user_phone = trim($_POST['phone']);

// // Метаданные для отправки письма
$email_to = 'exelinger@yaandex.ru';
// $email_to = 'info@ip-russia.ru';
$sitename  = 'Ip-russia';
$subject   = 'Новая заявка с сайта IPRUSSIA';
$headers = "From: info@ip-russia.ru" . "\r\n"; 
$headers .= "MIME-Version: 1.0" . "\r\n"; 
$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
// // Формирование текста письма
// $message = '';
// if($user_tag) {
//   $message .= 'Форма: ' . $user_tag . "\n";
// }
// if($user_data) {
//   $message .= 'Контакт: ' . $user_data . "\n";
// }
// if($user_phone) {
//   $message .= 'Телефон: ' . $user_phone . "\n";
// }

// // Тест
// // echo $message;


$message = json_decode($_POST['data']);

var_dump($message);

$answer = "";
for ($i=0;$i<count($message);$i++) {
  foreach ($message[$i] as $key => $value) {
    $answer = $answer.$value." ";
  }
  $answer = $answer." \r\n ";
}
// var_dump(json_decode($_POST['data']));
mail($email_to, $subject, $answer, $header);

echo "Ваше письмо отправлено";
echo $answer;


var_dump(json_decode($_POST['data'])); 
if (mail($email_to, $subject, $answer,$headers)) 
  echo "Ваше письмо отправлено"; 
else { 
  echo "ошибка"; 
}
?>