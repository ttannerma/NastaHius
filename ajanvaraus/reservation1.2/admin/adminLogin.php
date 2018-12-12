<?php

include '../lib/connection1.2.php';
//Tarkistetaan ettei syötteet ole tyhjiä.
if (isset($_POST['userID']) && isset($_POST['password'])) {
    $uid = $_POST['userID'];
    $password = $_POST['password'];
}
//Haetaan admininfo-pöydästä kirjautumis-tiedot.
$sql = "SELECT adminID, adminPassword FROM admininfo";
$result = $conn->query($sql);
if($result->num_rows > 0) {
    $row = $result->fetch_assoc();
}
//Tarkistetaan sopiiko annetut tiedot tietokannassa oleviin ja sen perusteella palautetaan 1 tai 0.
$passwordCheck = password_verify($password, $row['adminPassword']);
if ($passwordCheck == TRUE && $uid == $row['adminID']) {
    $success = 1;
} else {
    $success = 0;
}
echo $success;

?>