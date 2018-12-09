<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Page Title</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    <script type="text/javascript" src="https://cdn.emailjs.com/sdk/2.1.0/email.min.js"></script>
    <link rel="stylesheet" type="text/css" media="screen" href="main.css" />
    <script src="main.js"></script>
</head>
<?php include 'connection1.2.php'; ?>
<body>
    <div class="container">

        <table class="calendar">
            <tr id="days">
                <td id="monday">Ma</td>
                <td id="tuesday">Ti</td>
                <td id="wednesday">Ke</td>
                <td id="thursday">To</td>
                <td id="friday">Pe</td>
            </tr>
            
            <div class="reservationConfirm">
                <div class="box">
                    <div class="top">
                    <div id="dateAndTime">
                        <p id="date"></p>
                        <p id="time"></p>
                    </div>
                    <p id="cancel">X</p>
                    </div>
                    <form>
                        <select name="procedure" onchange="checkLength(getType(this.value))">
                            <option value="">Valitse palvelu:</option>
                            <option value="Kampaus">Kampaus</option>
                            <option value="Värjäys">Värjäys</option>
                            <option value="Leikkaus">Hiusten leikkaus</option>
                        </select>
                    </form>
                    <div class="email">
                        <p>Kirjoita sähköpostiosoitteesi</p>
                        <input type="text" id="email">
                    </div>
                    <button id="submit">Vahvista</button>
                </div>
            </div>
            <tr id="times">
                <td id="mondayTimes">
                    <ul>
                        <li id="monday">9:00</li>
                        <li id="monday">9:30</li>
                        <li id="monday">10:00</li>
                        <li id="monday">10:30</li>
                        <li id="monday">11:00</li>
                        <li id="monday">11:30</li>
                        <li id="monday">12:00</li>
                        <li id="monday">12:30</li>
                        <li id="monday">13:00</li>
                        <li id="monday">13:30</li>
                        <li id="monday">14:00</li>
                        <li id="monday">14:30</li>
                        <li id="monday">15:00</li>
                        <li id="monday">15:30</li>
                        <li id="monday">16:00</li>
                    </ul>
                </td>
                <td id="tuesdayTimes">
                    <ul>
                        <li id="tuesday">9:00</li>
                        <li id="tuesday">9:30</li>
                        <li id="tuesday">10:00</li>
                        <li id="tuesday">10:30</li>
                        <li id="tuesday">11:00</li>
                        <li id="tuesday">11:30</li>
                        <li id="tuesday">12:00</li>
                        <li id="tuesday">12:30</li>
                        <li id="tuesday">13:00</li>
                        <li id="tuesday">13:30</li>
                        <li id="tuesday">14:00</li>
                        <li id="tuesday">14:30</li>
                        <li id="tuesday">15:00</li>
                        <li id="tuesday">15:30</li>
                        <li id="tuesday">16:00</li>
                    </ul>
                </td>
                <td id="wednesdayTimes">
                    <ul>
                        <li id="wednesday">9:00</li>
                        <li id="wednesday">9:30</li>
                        <li id="wednesday">10:00</li>
                        <li id="wednesday">10:30</li>
                        <li id="wednesday">11:00</li>
                        <li id="wednesday">11:30</li>
                        <li id="wednesday">12:00</li>
                        <li id="wednesday">12:30</li>
                        <li id="wednesday">13:00</li>
                        <li id="wednesday">13:30</li>
                        <li id="wednesday">14:00</li>
                        <li id="wednesday">14:30</li>
                        <li id="wednesday">15:00</li>
                        <li id="wednesday">15:30</li>
                        <li id="wednesday">16:00</li>
                    </ul>
                </td>
                <td id="thursdayTimes">
                    <ul>
                        <li id="thursday">9:00</li>
                        <li id="thursday">9:30</li>
                        <li id="thursday">10:00</li>
                        <li id="thursday">10:30</li>
                        <li id="thursday">11:00</li>
                        <li id="thursday">11:30</li>
                        <li id="thursday">12:00</li>
                        <li id="thursday">12:30</li>
                        <li id="thursday">13:00</li>
                        <li id="thursday">13:30</li>
                        <li id="thursday">14:00</li>
                        <li id="thursday">14:30</li>
                        <li id="thursday">15:00</li>
                        <li id="thursday">15:30</li>
                        <li id="thursday">16:00</li>
                    </ul>
                </td>
                <td id="fridayTimes">
                    <ul>
                        <li id="friday">9:00</li>
                        <li id="friday">9:30</li>
                        <li id="friday">10:00</li>
                        <li id="friday">10:30</li>
                        <li id="friday">11:00</li>
                        <li id="friday">11:30</li>
                        <li id="friday">12:00</li>
                        <li id="friday">12:30</li>
                        <li id="friday">13:00</li>
                        <li id="friday">13:30</li>
                        <li id="friday">14:00</li>
                        <li id="friday">14:30</li>
                        <li id="friday">15:00</li>
                        <li id="friday">15:30</li>
                        <li id="friday">16:00</li>
                    </ul>
                </td>
            </tr>
        </table>
    </div>
</body>
</html>

