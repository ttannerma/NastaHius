<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Admin</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" type="text/css" media="screen" href="../css/adminCss.css" />
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    <script src="adminJs.js"></script>
    <script src="deleteRow.js"></script>
</head>
<body>
<button id="back" onclick="back()">Takaisin etusivulle</button> <!--- Tämä nappi vie takaisin etusivulle -->
<table>
<th>
    <tr>
        <td class="top">Päivä</td>
        <td class="top">Aloitusaika</td>
        <td class="top">Palvelu</td>
        <td class="top">Pituus</td>
        <td class="top">Sähköposti</td>
    </tr>
</th>
<?php

include '../lib/connection1.2.php';
/*
Tässä tarkistetaan että onko tälle sivulle ohjattu etusivun kautta vai ei. Jos on, ei tapahdu mitään. Jos ei ole, käyttäjä ohjataan etusivulle.
Tämä estää admin-sivulle pääsyn kirjoittamalla osoite suoraan osoitepalkkiin. 
*/

if ($_SERVER['HTTP_REFERER'] != 'http://home.tamk.fi/~c7tkoski/reservation1.2/app/index.php') {
    echo '<script type="text/javascript">
            window.location.replace("../app/index.php")
          </script>';
}

//Kun sivu ladataan, tulostetaan kaikki varaukset pöytään päiväjärjestyksessä.
//$sql = "SELECT dayID, strTime, type, length, email FROM reservation ORDER BY FIELD(dayID,'Maanantai','Tiistai','Keskiviikko','Torstai','Perjantai'), strTime DESC";
$sql = "SELECT dayID, strTime, type, length, email FROM reservation ORDER BY FIELD(dayID,'Maanantai','Tiistai','Keskiviikko','Torstai','Perjantai'),strTime ASC";
$result = $conn->query($sql);
if ($result->num_rows > 0) {
    $id = 0;
    
    while ($row = $result->fetch_assoc()) {
        echo "<tr id='row $id'>"."<td id='day'>".$row['dayID']."</td>"."<td id='time'>".$row['strTime']."</td>"."<td id='type'>".$row['type']."</td>"."<td id='duration'>".
            $row['length']."</td>"."<td id='email'>".$row['email']."</td>"."<td> <button id='delButtonRow'>Poista varaus</button> </td>"."</tr>\n";
            $id++;
    }
}
?>
<!--- Container lisäys- ja poisto-formeille -->
<div class="deleteAndAdd">
<!--- Form adminin tekemän varauksen lisäämiselle -->
<h3>Syötä tähän päivä, aloitusaika, tyyppi(esim. lounastauko), kesto jolloin haluat ettei varauksia voi tehdä kyseiselle ajalle.</h3>
<form>
    <input type="text" id="uDay" placeholder="Päivä">
    <input type="text" id="uStartTime" placeholder="Aloitusaika">
    <input type="text" id="uType" placeholder="Tyyppi">
    <input type="text" id="uLength" placeholder="Pituus (1 = 30min / 2 = 1h)">
    <button type="button" id="uAdd">Lisää</button>
</form>
</div>
</table>
</body>
</html>

<script>
    //Funktio, jonka takaisin etusivulle vievä nappi suorittaa kun sitä klikataan.
    function back () {
        window.location.replace('../app/index.php')
    }
</script>