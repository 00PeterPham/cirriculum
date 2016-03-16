<!DOCTYPE HTML>
<html>
<head>
	<title>Titan | Martial Arts Club | Cirriculum</title>
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<meta name="title" content="">
		<link href='https://fonts.googleapis.com/css?family=Open+Sans:400,300,300italic,400italic,600,600italic,700,700italic,800,800italic' rel='stylesheet' type='text/css'>
		<link rel="stylesheet" type="text/css" href="css/styles.css">

		<script type="text/javascript" src="js/lib/jquery-1.11.2.min.js"></script>
		<script type="text/javascript" src="js/scripts.js"></script>
		<!--[if lt IE 9]>
			<script type="text/javascript" src="js/lib/html5shiv.min.js"></script>
			<script type="text/javascript" src="js/lib/html5shiv-printshiv.min.js"></script>
		<![endif]-->
</head>
<body>
	<div class="inner">
		<a class='combo-creator-link' href="/cirriculum/combo_creator">Combo Creator</a>
<!-- 		<input class='date' type='date' name='date_picker'>
		<div class="go">go</div> -->


		<form action="index.php" method="post">
			Month:  
			<select name="month_">
				<option value='blank'></option>
				<option value='jan'>January</option>
				<option value='feb'>February</option>
				<option value='march'>March</option>
				<option value='april'>April</option>
				<option value='may'>May</option>
				<option value='june'>June</option>
				<option value='july'>July</option>
				<option value='aug'>August</option>
				<option value='sept'>September</option>
				<option value='oct'>October</option>
				<option value='nov'>November</option>
				<option value='decem'>December</option>
			</select>
			<br>
			Day: 
			<select type="day" name="day_">
				<option value='blank'></option>
				<option value='1'>1</option>
				<option value='2'>2</option>
				<option value='3'>3</option>
				<option value='4'>4</option>
				<option value='5'>5</option>
				<option value='6'>6</option>
				<option value='7'>7</option>
				<option value='8'>8</option>
				<option value='9'>9</option>
				<option value='10'>10</option>
				<option value='11'>11</option>
				<option value='12'>12</option>
				<option value='13'>13</option>
				<option value='14'>14</option>
				<option value='15'>15</option>
				<option value='16'>16</option>
				<option value='17'>17</option>
				<option value='18'>18</option>
				<option value='19'>19</option>
				<option value='20'>20</option>
				<option value='21'>21</option>
				<option value='22'>22</option>
				<option value='23'>23</option>
				<option value='24'>24</option>
				<option value='25'>25</option>
				<option value='26'>26</option>
				<option value='27'>27</option>
				<option value='28'>28</option>
				<option value='29'>29</option>
				<option value='30'>30</option>
				<option value='31'>01</option>
			</select>
			<br>
			<input type="submit">
		</form>

		<?php
		  // // the message
		  // $msg = $_POST['combos'];

		  // $combo     = $_POST['combos'];
		  $month     = $_POST['month_'];
		  $day     = $_POST['day_'];

		  echo "<br> $month, $day <br><br>";
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

			// $sql = "INSERT INTO combos (march) WHERE 'id=17'
			// VALUES ('$combo')";

			$sql = "SELECT $month FROM combos WHERE id='$day'";
			$result = mysqli_query($conn, $sql);

			if (mysqli_num_rows($result) > 0) {
			    // output data of each row
			    while($row = mysqli_fetch_assoc($result)) {
			        echo str_replace(" __ ","<br><br>",$row["march"]);
			    }
			} else {
			    echo "0 results";
			}

			mysqli_close($conn);
		?>

		<!-- <h2>MARCH</h2>
		<div class="month-con">
			<label class='week-label'>Week 1<span class="arrow-up"></span></label>
			<div class="week week-1">
				<div class="day tues">
					<span>Tuesday</span>
					<div class="combo-block">
						<textarea class="combo combo-1">test</textarea>
						<textarea class="combo combo-2">test 2</textarea>
						<textarea class="combo combo-3">test 3</textarea>
						<textarea class="note" placeholder='notes'></textarea>
					</div>
				</div>
				<div class="day thurs">
					<span>Thursday</span>
					<div class="combo-block">
						<textarea class="combo combo-1">test</textarea>
						<textarea class="combo combo-2">test 2</textarea>
						<textarea class="combo combo-3">test 3</textarea>
					</div>
				</div>
				<div class="day sat">
					<span>Saturday</span>
					<div class="combo-block">
						<textarea class="combo combo-1">test</textarea>
						<textarea class="combo combo-2">test 2</textarea>
						<textarea class="combo combo-3">test 3</textarea>
					</div>
				</div>
			</div>
			<label class='week-label'>Week 2<span class="arrow-up"></span></label>
			<div class="week week-2">
				<div class="day tues">
					<span>Tuesday</span>
					<div class="combo-block">
						<textarea class="combo combo-1">test</textarea>
						<textarea class="combo combo-2">test 2</textarea>
						<textarea class="combo combo-3">test 3</textarea>
					</div>
				</div>
				<div class="day thurs">
					<span>Thursday</span>
					<div class="combo-block">
						<textarea class="combo combo-1">test</textarea>
						<textarea class="combo combo-2">test 2</textarea>
						<textarea class="combo combo-3">test 3</textarea>
					</div>
				</div>
				<div class="day sat">
					<span>Saturday</span>
					<div class="combo-block">
						<textarea class="combo combo-1">test</textarea>
						<textarea class="combo combo-2">test 2</textarea>
						<textarea class="combo combo-3">test 3</textarea>
					</div>
				</div>
			</div>
			<label class='week-label'>Week 3<span class="arrow-up"></span></label>
			<div class="week week-3">
				<div class="day tues">
					<span>Tuesday</span>
					<div class="combo-block">
						<textarea class="combo combo-1">test</textarea>
						<textarea class="combo combo-2">test 2</textarea>
						<textarea class="combo combo-3">test 3</textarea>
					</div>
				</div>
				<div class="day thurs">
					<span>Thursday</span>
					<div class="combo-block">
						<textarea class="combo combo-1">test</textarea>
						<textarea class="combo combo-2">test 2</textarea>
						<textarea class="combo combo-3">test 3</textarea>
					</div>
				</div>
				<div class="day sat">
					<span>Saturday</span>
					<div class="combo-block">
						<textarea class="combo combo-1">test</textarea>
						<textarea class="combo combo-2">test 2</textarea>
						<textarea class="combo combo-3">test 3</textarea>
					</div>
				</div>
			</div>
			<label class='week-label'>Week 4<span class="arrow-up"></span></label>
			<div class="week week-4">
				<div class="day tues">
					<span>Tuesday</span>
					<div class="combo-block">
						<textarea class="combo combo-1">test</textarea>
						<textarea class="combo combo-2">test 2</textarea>
						<textarea class="combo combo-3">test 3</textarea>
					</div>
				</div>
				<div class="day thurs">
					<span>Thursday</span>
					<div class="combo-block">
						<textarea class="combo combo-1">test</textarea>
						<textarea class="combo combo-2">test 2</textarea>
						<textarea class="combo combo-3">test 3</textarea>
					</div>
				</div>
				<div class="day sat">
					<span>Saturday</span>
					<div class="combo-block">
						<textarea class="combo combo-1">test</textarea>
						<textarea class="combo combo-2">test 2</textarea>
						<textarea class="combo combo-3">test 3</textarea>
					</div>
				</div>
			</div>
		</div>-->
	</div> 
</body>
</html>