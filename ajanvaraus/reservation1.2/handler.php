<?php 
include 'connection1.2.php';
if(isset($_POST['day'])) {
    $day = $_POST['day'];
    $time = $_POST['time'];
    $type = $_POST['type'];
    $length = $_POST['length'];
    $dayId = $_POST['dayId'];
}
$sql = "INSERT INTO reservations (dayID, strTime, type, length)
VALUES ('$dayId', '$time', '$type', '$length')";

if ($conn->query($sql) === TRUE) {

}
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