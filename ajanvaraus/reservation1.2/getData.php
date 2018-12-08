<?php
include 'connection1.2.php';

header('Data-Type: application/json');
$sql2 = "SELECT dayID, length, strTime FROM reservations";
$result = $conn->query($sql2);
$array = array();
if($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
        $array[] = $row;
    }
}
$json = json_encode($array);
echo $json;
?>