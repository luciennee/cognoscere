<?php

$serverName = "localhost"; 
$serverName = "root";
$dBPassword = "";
$dBName = "cognoscere";

$conn = mysqli_connect($serverName, $serverName, $dBPassword, $dBName);

if(!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}