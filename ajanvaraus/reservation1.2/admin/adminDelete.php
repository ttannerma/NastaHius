<?php
include '../lib/connection1.2.php';
//Asetetaan muuttujiin Adminin antamat arvot.
if (isset($_POST['day'], $_POST['strTime'], $_POST['length'])) {
    $day = $_POST['day'];
    $time = $_POST['strTime'];
    $length = $_POST['length'];
    //Poistetaan tietokannasta rivi, joka sopii yhteen adminin antamien tietojen kanssa.
    $sql = "DELETE FROM reservation WHERE dayID = '$day' AND strTime = '$time' AND length = '$length'";
}
//Jos tietokannasta poistui rivi tulostetaan 'Varaus poistettiin onnistuneesti!'
if ($conn->query($sql) === TRUE && mysqli_affected_rows($conn) > 0) {
    echo 'Varaus poistettiin onnistuneesti!';
} else {
    //Muuten tulostetaan 'Poistettavaa varausta ei löytynyt'
    echo 'Poistettavaa varausta ei löytynyt';
}

?>