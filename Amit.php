<?php
header("Content-Type: application/json");
$servername = "localhost";
$username = "admin";
$password = 'Amit@123';
$database = "details";

$conn = new mysqli($servername, $username, $password, $database);
$request_method = $_SERVER["REQUEST_METHOD"];
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

if (!(isset($_POST["email"]) && isset($_POST["password"]) && isset($_POST["number"]))) {
    exit("not1");
}
$email = $_POST["email"];
$password = $_POST["password"];
$number = $_POST["number"];

if (!(isset($_POST["address"]) && isset($_POST["city"]) && isset($_POST["state"]))) {
    exit("not2");
}
$address = $_POST["address"];
$city = $_POST["city"];
$state = $_POST["state"];


try {
    $sql1 = "INSERT INTO `regtable` (`UserName`, `Password`, `Mobile`) VALUES ('{$email}', '{$password}', '{$number}')";
    if ($conn->query($sql1)) {
        echo 'success';
    } else {
        echo "error";
    }

    $sql2 = "INSERT INTO `detailtble` (`Address`, `City`, `State`) VALUES ('{$address}', '{$city}', '{$state}')";

    if ($conn->query($sql2)) {
        echo 'success';
    } else {
        echo "error";
    }
    echo "Registration successful!";
} catch (Exception $e) {
    echo "Registration failed: " . $e->getMessage();
}

?>
