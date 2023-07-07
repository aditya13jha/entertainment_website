<?php
$name = $_POST['name'];
$user_id = $_POST['idd'];
$feedback = $_POST['review'];
$conn = mysqli_connect("localhost", "root", "", "feedback_movie") or die("connection failed");
$sql = "INSERT INTO feedback_info( name, user_id, feedback) VALUES ('{$name}','{$user_id}','{$feedback}')";
$result = mysqli_query($conn, $sql) or die("Query Failed!");
header("location:http://localhost/movieproject/index.html");
mysqli_close($conn);
?>