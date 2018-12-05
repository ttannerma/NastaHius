<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Page Title</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
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
                    <div id="dateAndTime"></div>
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
                        <li>9:00</li>
                        <li>9:30</li>
                        <li>10:00</li>
                        <li>10:30</li>
                        <li>11:00</li>
                        <li>11:30</li>
                        <li>12:00</li>
                        <li>12:30</li>
                        <li>13:00</li>
                        <li>13:30</li>
                        <li>14:00</li>
                        <li>14:30</li>
                        <li>15:00</li>
                        <li>15:30</li>
                        <li>16:00</li>
                    </ul>
                </td>
                <td id="tuesdayTimes">
                    <ul>
                        <li>9:00</li>
                        <li>9:30</li>
                        <li>10:00</li>
                        <li>10:30</li>
                        <li>11:00</li>
                        <li>11:30</li>
                        <li>12:00</li>
                        <li>12:30</li>
                        <li>13:00</li>
                        <li>13:30</li>
                        <li>14:00</li>
                        <li>14:30</li>
                        <li>15:00</li>
                        <li>15:30</li>
                        <li>16:00</li>
                    </ul>
                </td>
                <td id="wednesdayTimes">
                    <ul>
                        <li>9:00</li>
                        <li>9:30</li>
                        <li>10:00</li>
                        <li>10:30</li>
                        <li>11:00</li>
                        <li>11:30</li>
                        <li>12:00</li>
                        <li>12:30</li>
                        <li>13:00</li>
                        <li>13:30</li>
                        <li>14:00</li>
                        <li>14:30</li>
                        <li>15:00</li>
                        <li>15:30</li>
                        <li>16:00</li>
                    </ul>
                </td>
                <td id="thursdayTimes">
                    <ul>
                        <li>9:00</li>
                        <li>9:30</li>
                        <li>10:00</li>
                        <li>10:30</li>
                        <li>11:00</li>
                        <li>11:30</li>
                        <li>12:00</li>
                        <li>12:30</li>
                        <li>13:00</li>
                        <li>13:30</li>
                        <li>14:00</li>
                        <li>14:30</li>
                        <li>15:00</li>
                        <li>15:30</li>
                        <li>16:00</li>
                    </ul>
                </td>
                <td id="fridayTimes">
                    <ul>
                        <li>9:00</li>
                        <li>9:30</li>
                        <li>10:00</li>
                        <li>10:30</li>
                        <li>11:00</li>
                        <li>11:30</li>
                        <li>12:00</li>
                        <li>12:30</li>
                        <li>13:00</li>
                        <li>13:30</li>
                        <li>14:00</li>
                        <li>14:30</li>
                        <li>15:00</li>
                        <li>15:30</li>
                        <li>16:00</li>
                    </ul>
                </td>
            </tr>
        </table>

    </div>
</body>
</html>