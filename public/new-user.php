<?php

$con = mysqli_connect("localhost", "root", "", "portfolio");
$data = extract($_POST);

$fname = $_POST["fname"];
$username = $_POST["user"];
$email = $_POST["email"];
$password = $_POST["password"];


if (mysqli_connect_errno()) {
    echo "Failed to connect to MySQL: " . mysqli_connect_error();
    exit();
}

$sql = "INSERT INTO users (fname,username,password,fname,sname) VALUES ('$email','$username','$password','$fname','$sname')";
echo ($sql);

if ($result = mysqli_query($con, $sql)) {
    echo "Success";
    header("location:index.php");
} else {
    echo "failed";
}

?>
 