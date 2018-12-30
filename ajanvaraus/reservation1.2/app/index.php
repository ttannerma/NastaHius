<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Ajanvaraus</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    <script type="text/javascript" src="https://cdn.emailjs.com/sdk/2.1.0/email.min.js"></script>
    <link rel="stylesheet" type="text/css" media="screen" href="../css/main.css" />
    <script src="../functions/main.js"></script>
</head>

<body>
    <!--- Sivun ylälaidassa oleva adminin kirjautumis-osio ja käyttäjälle annettu ohje-->
    <div class="admin">
        <form>
            <input id="uid" type="text" placeholder="Admin-tunnus">
            <input id="password" type="text" placeholder="Admin-salasana">
            <button type="button" id="login">Login</button>
        </form>
        <div><h3>Valitse tästä aika ja palvelu</h3></div>
    </div>
    <!--- Adminin kirjautumis-osio ja käyttäjän ohje päättyy -->

    <!--- Viikkokalenterin sisältävä container -->
    <div class="container">
        <!--- Itse kalenteri -->
        <table class="calendar">
            <tr id="days">
                <td id="monday">Ma</td>
                <td id="tuesday">Ti</td>
                <td id="wednesday">Ke</td>
                <td id="thursday">To</td>
                <td id="friday">Pe</td>
            </tr>
            <tr id="times">
                <td id="mondayTimes">
                    <ul>
                        <li id="Maanantai">09:00</li>
                        <li id="Maanantai">09:30</li>
                        <li id="Maanantai">10:00</li>
                        <li id="Maanantai">10:30</li>
                        <li id="Maanantai">11:00</li>
                        <li id="Maanantai">11:30</li>
                        <li id="Maanantai">12:00</li>
                        <li id="Maanantai">12:30</li>
                        <li id="Maanantai">13:00</li>
                        <li id="Maanantai">13:30</li>
                        <li id="Maanantai">14:00</li>
                        <li id="Maanantai">14:30</li>
                        <li id="Maanantai">15:00</li>
                        <li id="Maanantai">15:30</li>
                        <li id="Maanantai">16:00</li>
                    </ul>
                </td>
                <td id="tuesdayTimes">
                    <ul>
                        <li id="Tiistai">09:00</li>
                        <li id="Tiistai">09:30</li>
                        <li id="Tiistai">10:00</li>
                        <li id="Tiistai">10:30</li>
                        <li id="Tiistai">11:00</li>
                        <li id="Tiistai">11:30</li>
                        <li id="Tiistai">12:00</li>
                        <li id="Tiistai">12:30</li>
                        <li id="Tiistai">13:00</li>
                        <li id="Tiistai">13:30</li>
                        <li id="Tiistai">14:00</li>
                        <li id="Tiistai">14:30</li>
                        <li id="Tiistai">15:00</li>
                        <li id="Tiistai">15:30</li>
                        <li id="Tiistai">16:00</li>
                    </ul>
                </td>
                <td id="wednesdayTimes">
                    <ul>
                        <li id="Keskiviikko">09:00</li>
                        <li id="Keskiviikko">09:30</li>
                        <li id="Keskiviikko">10:00</li>
                        <li id="Keskiviikko">10:30</li>
                        <li id="Keskiviikko">11:00</li>
                        <li id="Keskiviikko">11:30</li>
                        <li id="Keskiviikko">12:00</li>
                        <li id="Keskiviikko">12:30</li>
                        <li id="Keskiviikko">13:00</li>
                        <li id="Keskiviikko">13:30</li>
                        <li id="Keskiviikko">14:00</li>
                        <li id="Keskiviikko">14:30</li>
                        <li id="Keskiviikko">15:00</li>
                        <li id="Keskiviikko">15:30</li>
                        <li id="Keskiviikko">16:00</li>
                    </ul>
                </td>
                <td id="thursdayTimes">
                    <ul>
                        <li id="Torstai">09:00</li>
                        <li id="Torstai">09:30</li>
                        <li id="Torstai">10:00</li>
                        <li id="Torstai">10:30</li>
                        <li id="Torstai">11:00</li>
                        <li id="Torstai">11:30</li>
                        <li id="Torstai">12:00</li>
                        <li id="Torstai">12:30</li>
                        <li id="Torstai">13:00</li>
                        <li id="Torstai">13:30</li>
                        <li id="Torstai">14:00</li>
                        <li id="Torstai">14:30</li>
                        <li id="Torstai">15:00</li>
                        <li id="Torstai">15:30</li>
                        <li id="Torstai">16:00</li>
                    </ul>
                </td>
                <td id="fridayTimes">
                    <ul>
                        <li id="Perjantai">09:00</li>
                        <li id="Perjantai">09:30</li>
                        <li id="Perjantai">10:00</li>
                        <li id="Perjantai">10:30</li>
                        <li id="Perjantai">11:00</li>
                        <li id="Perjantai">11:30</li>
                        <li id="Perjantai">12:00</li>
                        <li id="Perjantai">12:30</li>
                        <li id="Perjantai">13:00</li>
                        <li id="Perjantai">13:30</li>
                        <li id="Perjantai">14:00</li>
                        <li id="Perjantai">14:30</li>
                        <li id="Perjantai">15:00</li>
                        <li id="Perjantai">15:30</li>
                        <li id="Perjantai">16:00</li>
                    </ul>
                </td>
            </tr>
        </table>
        <!--- Kalenteri päättyy -->
    </div>
    <!--- Kalenterin sisällään pitävä container päättyy -->
    
    <!--- Normaalisti piilossa oleva ajanvarauksen vahvistuslomake -->
    <div class="reservationConfirm">
            <p id="cancel">X</p> <!--- peruutus-ruksi -->
            <div class="box"> <!--- box on container lomakkeessa oleville diveille ja formille. -->
                <div class="top">
                    <div id="dateAndTime">
                        <h3 id="date"></h3>
                        <h3 id="time"></h3>
                    </div>
                </div>
                    <form>
                        <select name="procedure" onchange="checkLength(this.value)">
                            <option value="">Valitse palvelu:</option>
                            <option value="Kampaus">Kampaus (1 tunti)</option>
                            <option value="Värjäys">Värjäys (1 tunti)</option>
                            <option value="Leikkaus">Hiusten leikkaus (30 min)</option>
                        </select>
                    </form>
                <div class="email">
                    <p>Kirjoita sähköpostiosoitteesi</p>
                    <input type="text" id="email">
                </div>
                <button id="submit">Vahvista</button>
            </div>
        </div>
</body>
</html>
