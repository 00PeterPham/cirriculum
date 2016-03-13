<?php
  // // the message
  // $msg = $_POST['combos'];

  $combo     = $_POST['combos'];
  // $combo      = mysql_real_escape_string($combo);

  // // send email
  // mail("titan.maclub@gmail.com","My subject",$msg);

  	//TITAN DB
	$servername = "mysql.peter-pham.com";
	$username = "titanmac";
	$password = "headkick9591";
	$dbname = "titan_mac";

  	//LOCAL DB
	// $servername = "localhost";
	// $username = "root";
	// $password = "headkick";
	// $dbname = "titan";

	// Create connection
	$conn = new mysqli($servername, $username, $password, $dbname);
	// Check connection
	if ($conn->connect_error) {
	    die("Connection failed: " . $conn->connect_error);
	} 

	$sql = "INSERT INTO combos (march)
	VALUES ('$combo')";

	if ($conn->query($sql) === TRUE) {
	    echo "New record created successfully";
	} else {
	    echo "Error: " . $sql . "<br>" . $conn->error;
	}

	$conn->close();
?>