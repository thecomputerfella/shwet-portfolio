
<?php

$con = mysqli_connect("localhost", "root", "", "portfolio");
$data = extract($_POST);


$username = $_POST["username"];
$password = $_POST["password"];

if (mysqli_connect_errno()) {
    echo "Failed to connect to MySQL: " . mysqli_connect_error();
    exit();
}

$sql = "SELECT * from users where username = '$username' AND password = '$password' ";
// echo ($sql);
if ($result = mysqli_query($con, $sql)) {
    echo "Success";
    $id;
    $fname;
    $count =  (mysqli_num_rows($result));

    if ($count < 1) {
        header("location:login.php");
    } else {
        while ($row = mysqli_fetch_assoc($result)) {
            echo "id: " . $row["uid"] . " - Name: " . $row["fname"] . " " . $row["sname"] . "<br>";
            $id = $row['uid'];
            $fname = $row['fname'];
        }
        setcookie('fname', $fname, time() + (86400 * 30), "/");
        setcookie('uid',$id, time() + (86400 * 30), "/");
        header("location:profile.php");
    }
} else {
    echo "failed";
}

?>
