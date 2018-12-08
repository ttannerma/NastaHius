function getType (e) {
    let procedure = e
    return procedure
}
function checkLength (e) {
    let length = 0;
    if (e === 'Leikkaus') {
        length = 1
    } else if (e === 'Kampaus' || 'Värjäys') {
        length = 2
    }
    
    return length
}


window.addEventListener('load', () => {
    let box = document.getElementsByClassName('reservationConfirm') //vahvistuslomake
    let date = document.getElementById('date')//vahvistuslomakkeessa lukeva päivä
    let time = document.getElementById('time')//vahvistuslomakkeessa lukeva aika
    let times = document.querySelectorAll('li')//kaikki li-elementit (ajat)

    for (let i = 0; i < times.length; i++) {
        /*
        kaikille li-elementeille eventlistener. Tuo if-lause on tuossa sitä varten, ettei se laittaisi jo varatuille ajoille
        eventlisteneriä. Idea siinä on se että jos aika on varattu niin sitä ei voi klikata. En siis tiedä toimiiko tuo vielä
        koska wamp ei päivitä sitä filuu jostain syystä. (voi ottaa pois jos se jotain perseilee (sen if-lauseen siis))
        */
        if(times[i].style.backgroundColor != 'red') {

            times[i].addEventListener('mouseup', () => {
                box[0].style.display = 'initial'

                let selectedTime = times[i].innerHTML
                let day = times[i].parentElement.parentElement.id

                day = checkDay(day)

                if(date.innerHTML === "" && time.innerHTML === "") {
                    time.append(selectedTime)
                    date.append(day)
                    date.value = times[i].id
                }
            })
        }
    }

    function checkDay (day) {
        if (day === 'mondayTimes') {
            day = 'Maanantai'
        } else if (day === 'tuesdayTimes') {
            day = 'Tiistai'
        } else if (day === 'wednesdayTimes') {
            day = 'Keskiviikko'
        } else if (day === 'thursdayTimes') {
            day = 'Torstai'
        } else if (day === 'fridayTimes') {
            day = 'Perjantai'
        }
        return day
    }
    
    
    
    document.getElementById('cancel').addEventListener('mouseup', () => { //Tää on ruksi, joka on siin varauslomakkeessa
        box[0].style.display = 'none'
        date.innerHTML = ""
        time.innerHTML = ""
    })
    /*
    Tää tässä pyörähtää kun sivu on käytännössä ladannu.
    Se lähettää get-pyynnön getData.php:lle ja se php vaan hakee
    datan mitä on tallennettuna tietokantaan. Se sitten muuttaa kaikki li-elementit
    punasiks mitkä matchaa tietokannasta tulleen tiedon kanssa.
    */
    $(document).ready(function () { 
        $.get('getData.php', function (data) {
            data = JSON.parse(data)
            for(let i =0; i < times.length; i++) {
                for(let j = 0; j < data.length; j++) {
                    if(data[j].dayID == times[i].id && data[j].strTime == times[i].innerHTML) {
                        if(data[j].length == 2) {
                            times[i].style.backgroundColor = 'red'
                            times[i+1].style.backgroundColor = 'red'
                        } else if(data[j].length == 1) {
                            times[i].style.backgroundColor = 'red'
                        }
                    }
                }
            }
        })
    })
    /*
    Tää on käytännössä sama ku ylempi mut tää pyörähtää kun painetaan
    varauslomakkeessa "vahvista"-nappia. Ja sitten tää myös lähettää lomakkeessa olleet
    tiedot handler.php:lle, joka sitten tallettaa ne tietokantaan ja samalla antaa ne datat takasin
    sieltä ja tässä myös värjätään jos matchaa datat li-elementtien kanssa.
    */
    $('button').click(function () {
        let date = $('#date').text()
        let time = $('#time').text()
        let type = $('select').val()
        let length = checkLength(type)
        let dayId = $('#date').val()
        let email = $('#email').val()
        console.log(dayId)
        if(type !== "" && email !== "") {
            $.ajax({
                url: 'handler.php',
                type: 'POST',
                data: {
                    day: date,
                    time: time,
                    type: type,
                    length: length,
                    dayId: dayId
                },
                success: function (data) {
                    data = JSON.parse(data)
                    for(let i =0; i < times.length; i++) {
                        for(let j = 0; j < data.length; j++) {
                            if(data[j].dayID == times[i].id && data[j].strTime == times[i].innerHTML) {
                                if(data[j].length == 2) {
                                    times[i].style.backgroundColor = 'red'
                                    times[i+1].style.backgroundColor = 'red'
                                } else if(data[j].length == 1) {
                                    times[i].style.backgroundColor = 'red'
                                }
                            }
                        }
                    }
                }
            })
        }
    })

    

    
})