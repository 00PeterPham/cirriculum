<?php
  // // the message
  // $msg = $_POST['combos'];

  // $combo     = $_POST['combos'];
  $month     = $_REQUEST['month_'];
  $day     = $_REQUEST['day_'];
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

	$sql = "SELECT $month FROM combos WHERE id='$day'";
	$result = mysqli_query($conn, $sql);

	echo $month . $day . " __ ";

	// echo $combos_result;

	if (mysqli_num_rows($result) > 0) {
	    // output data of each row
	    while($row = mysqli_fetch_assoc($result)) {
	        echo $row["march"];
	    }
	} else {
	    echo "0 results";
	}

	mysqli_close($conn);
?>