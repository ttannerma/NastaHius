<?php
include 'connection1.2.php';
//Otetaan tietokannasta kaikki ajat ja talletetaan ne $array-muuttujaan.
header('Data-Type: application/json');
$sql2 = "SELECT dayID, length, strTime FROM reservation ORDER BY length";
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
?>