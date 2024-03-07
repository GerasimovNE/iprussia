<?php

// Получение данных полей формы
$user_stud = trim($_POST['stud']);
$user_dob = trim($_POST['dob']);
$user_age = trim($_POST['age']);
$user_sex = trim($_POST['sex']);
$user_nat = trim($_POST['nat']);
$user_arr = trim($_POST['arr']);
$user_week = trim($_POST['week']);
$user_addit = trim($_POST['addit']);
$user_contr = trim($_POST['contr']);
$user_swim = trim($_POST['swim']);
$user_trans = trim($_POST['trans']);
$user_cmane = trim($_POST['cname']);
$user_cmob = trim($_POST['cmob']);
$user_cma = trim($_POST['cma']);
$user_psn = trim($_POST['psn']);
$user_pfo = trim($_POST['pfo']);
$user_pdate = trim($_POST['pdate']);
$user_addr = trim($_POST['addr']);
$user_comm = trim($_POST['comm']);

// Метаданные для отправки письма
$email_to = 'info@ip-russia.ru';
$sitename  = 'Ip-russia';
$subject   = 'Бронирование: ' . $sitename;
$header = 'From:' . 'Детский лагерь IP-RUSSIA';

// Формирование текста письма
$message = '';
if($user_stud) {
  $message .= 'Имя студента: ' . $user_stud . "\n";
}
if($user_dob) {
  $message .= 'Дата рождения: ' . $user_dob . "\n";
}
if($user_age) {
  $message .= 'Возраст: ' . $user_age . "\n";
}
if($user_sex) {
  $message .= 'Пол: ' . $user_sex . "\n";
}
if($user_nat) {
  $message .= 'Национальность: ' . $user_nat . "\n";
}
if($user_arr) {
  $message .= 'Дата приезда: ' . $user_arr . "\n";
}
if($user_week) {
  $message .= 'Кол-во недель: ' . $user_week . "\n";
}
if($user_addit) {
  $message .= 'Доп занятия: ' . $user_addit . "\n";
}
if($user_contr) {
  $message .= 'Противопоказания: ' . $user_contr . "\n";
}
if($user_swim) {
  $message .= 'Умеет плавать: ' . $user_swim . "\n";
}
if($user_trans) {
  $message .= 'Нужен трансфер: ' . $user_trans . "\n \n";
}
if($user_cmane) {
  $message .= 'ФИО заказчика: ' . $user_cmane . "\n";
}
if($user_cmob) {
  $message .= 'Телефон: ' . $user_cmob . "\n";
}
if($user_cma) {
  $message .= 'Почта: ' . $user_cma . "\n";
}
if($user_psn) {
  $message .= 'Паспорт серия-номер: ' . $user_psn . "\n";
}
if($user_pfo) {
  $message .= 'Где и кем выдан: ' . $user_pfo . "\n";
}
if($user_pdate) {
  $message .= 'Дата выдачи: ' . $user_pdate . "\n";
}
if($user_addr) {
  $message .= 'Адрес: ' . $user_addr . "\n";
}
if($user_comm) {
  $message .= 'Комментарии: ' . $user_comm . "\n";
}

// Тест
// echo $message;

mail($email_to, $subject, $message, $header);
?>