<?php
    //Yhdistetään tietokantaan TAMK:n serverillä.
    $servername = "mydb.tamk.fi";
    $username = "c7tkoski";
    $password = "1Miljoona1";
    $mydb = "dbc7tkoski72";

    $conn = new mysqli($servername, $username, $password, $mydb);

    if($conn->connect_error) {
        die ("Connection failed" . $conn->$connect_error);
    }
?>