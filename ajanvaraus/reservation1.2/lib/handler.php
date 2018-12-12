<?php 
include 'connection1.2.php';
//Tallennetaan vahvistuslomakkeesta saadut tiedot muuttujiin.
if(isset($_POST['day'], $_POST['time'], $_POST['type'], $_POST['length'])) {
    $day = $_POST['day'];
    $time = $_POST['time'];
    $type = $_POST['type'];
    $length = $_POST['length'];
    $email = $_POST['email'];
}

//Syötetään tiedot tietokantaan.
$sql = "INSERT INTO reservation (dayID, strTime, type, length, email)
VALUES ('$day', '$time', '$type', '$length', '$email')";

if ($conn->query($sql) === TRUE) {
    //Otetaan tietokannasta kaikki ajat ja talletetaan ne $array-muuttujaan.
    header('Data-Type: application/json');
    $sql2 = "SELECT dayID, length, strTime FROM reservation";
    $result = $conn->query($sql2);
    $array = array();
    if($result->num_rows > 0) {
        while($row = $result->fetch_assoc()) {
            $array[] = $row;
        }
    }
    //Muutetaan array JSON:iksi ja tulostetaan se.
    $json = json_encode($array);
    echo $json;
}
?>