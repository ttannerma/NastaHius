

//Funktiolle annetaan parametrinä merkkijono. Riippuen merkkijonosta, funktio palauttaa arvon 1 tai 2. Funktiota käytetään tarkistamaan valitun palvelun pituus.
function checkLength (e) {
    let length = 0;
    if (e === 'Leikkaus') {
        length = 1
    } else if (e === 'Kampaus' || 'Värjäys') {
        length = 2
    }
    return length
}
//Tämä funktio validoi sille parametrina annettun sähköpostin.
function validateEmail(email) {
  let re = /^(?:[a-z0-9!#$%&amp;'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&amp;'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/
  return re.test(email)
}

window.addEventListener('load', () => {
    let box = document.getElementsByClassName('reservationConfirm') //Tämä on vahvistuslomake, joka tulee esiin kun käyttäjä valitsee ajan.
    let date = document.getElementById('date') //Tämä on vahvistuslomakkeessa oleva kohta, johon käyttäjän valitsema viikonpäivä tulee näkyviin.
    let time = document.getElementById('time') //Tämä on vahvistuslomakkeessa oleva kohta, johono käyttäjän valitsema aika tulee näkyviin.
    let times = document.querySelectorAll('li') //Nämä ovat kaikki li-elementit (ajat).
    let email = document.getElementById('email') //Tämä on vahvistuslomakkeessa oleva kohta, mihin käyttäjä kirjoittaa sähköpostinsa.
    
    /*
    Tässä odotetaan 0.1 sekuntia sivun lataamisen jälkeen, jotta sivu on kerennyt hakea tiedot jo varatuista ajoista ja merkata ne varatuiksi.
    0.1 sekunnin odotuksen jälkeen käydään kaikki li-elementit läpi ja niihin joita ei ole merkattu varatuiksi, kiinnitetään evenListener.
    */
    setTimeout(() => {
        for (let i = 0; i < times.length; i++) {
            if(times[i].innerHTML != 'varattu') {
                times[i].addEventListener('mouseup', () => {
                    box[0].style.display = 'initial' //Näyttää ruudulla vahvistuslomakkeen.
                    let selectedTime = times[i].innerHTML //Muuttujaan tallennetaan käyttäjän valitsema aika.
                    let day = times[i].parentElement.parentElement.id //Muuttujaan tallennetaan käyttäjän valitseman parenElementin parentElementti, joka on joko mondayTimes, tuesdayTimes jne.
                    day = checkDay(day) //Muuttujaan tallennetaan checkDay-funktion palauttama arvo, joka on joko Maanantai, Tiistai, Keskiviikko, Torstai tai Perjantai.

                    //Jos vahvistuslomakkeessa olevat kohdat joihin tulevat käyttäjän valitsema aika ja päivä ovat tyhjiä, niihin liitetään käyttäjän valitsema aika ja päivä.
                    if(date.innerHTML === "" && time.innerHTML === "") {
                        time.append(selectedTime)
                        date.append(day)
                    }
                })
            }
        }
    }, 100)
    //Funktiolle annetaan parametrinä merkkijono ja funktio palauttaa viikonpäivän väliltä Maanantai-Perjantai riippuen annetun merkkijonon sisällöstä.
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

    //Vahvistuslomaakkessa olevalle ruksille liitetään eventListener, joka painettaessa piilottaa vahvistuslomakkeen ja tyhjentää lomakkeessa olevan ajan, päivän ja sähköpostin.
    document.getElementById('cancel').addEventListener('mouseup', () => {
        box[0].style.display = 'none'
        date.innerHTML = ""
        time.innerHTML = ""
        email.value = ""
    })

    /*
    Kun dokumentti on ladannut suoritetaan funktio, joka lähettää GET-pyynnön getData.php:lle. getData.php hakee tietokannassa olevat varaukset ja palauttaa ne JSON:ina.
    Sitten käydään jokainen li-elementti läpi ja jokaisen li-elementin kohdalla käydään getData.php:n palauttama data läpi ja jos joku tietokannassa olevan rivin päivä ja aika
    vastaavat li-elementin päivää ja aikaa, kyseessä oleva li-elementti värjätään punaiseksi ja sen teksti vaihdetaan 'varattu':ksi.
    */
    $(document).ready(function () { 
        $.get('../lib/getData.php', function (data) {
            data = JSON.parse(data)
            console.log(data)
            for(let i =0; i < times.length; i++) {
                for(let j = 0; j < data.length; j++) {
                    if(data[j].dayID == times[i].id && data[j].strTime == times[i].innerHTML) {
                        if(data[j].length == 1) {
                            times[i].innerHTML = 'varattu'
                            times[i].style.backgroundColor = 'red'
                            times[i].style.pointerEvents = 'none';
                        }
                    }
                }
            }
            for(let i = 0; i < times.length; i ++) {
                for(let j = 0; j < data.length; j++) {
                    if(data[j].dayID == times[i].id && data[j].strTime == times[i].innerHTML) {
                        if(data[j].length == 2 && times[i+1].innerHTML != 'varattu') {
                            times[i].innerHTML = 'varattu'
                            times[i].style.backgroundColor = 'red'
                            times[i].style.pointerEvents = 'none';
                            times[i+1].innerHTML = 'varattu'
                            times[i+1].style.backgroundColor = 'red'
                            times[i+1].style.pointerEvents = 'none';

                        }
                    }
                }
            }
        })
    })
    // Lähettää sähköpostin käyttäjälle.
    function sendMail(email, time, day, length) {
        var templateParams = {
            reservation_time: time,
            reservation_date: day,
            reservation_length: length + "h",
            user_email: email,
            contact_number: 1
        };
            emailjs.init("user_SvTjHkxUntnNFDiAHjB3i");
            emailjs.send('contact_service', 'contact_form', templateParams)
                .then(function(response) {
                    console.log('SUCCESS!', response.status, response.text);
                }, function(error) {
                    console.log('FAILED...', error);
                });
        }
    
    /*
    Kun käyttäjä painaa vahvistuslomakkeessa olevaa 'vahvista'-nappia funktio ottaa ylös käyttäjän valitseman päivän, ajan,
    palvelun tyypin, sähköpostin ja palvelun pituuden, joka tarkistetaan funktiolla checkLength().
    Käyttäjän antama sähköposti validoidaan. Jos sähköposti ei ole oikessa muodossa, siitä ilmoitetaan käyttäjälle alert:n muodossa.
    Jos käyttäjä on valinnut palvelun tyypin, suoritetaan AJAX:lla POST-pyyntö handler.php:lle.
    handler.php tallettaa tietokantaan vahvistuslomakkeessa olleet tiedot ja sen jälkeen palauttaa tietokannassa olevat tiedot.

    Success-kohdassa päivitetään ajanvaraus-taulukkoon juuri varattu aika.
    */
    $('#submit').click(function () {
        let date = $('#date').text()
        let time = $('#time').text()
        let type = $('select').val()
        let length = checkLength(type)
        let email = $('#email').val()
        if(validateEmail(email)) {
            
            if(type !== "") {
                for(let i = 0; i < times.length; i++) {
                    if(times[i].id == date && times[i].innerHTML == time) {
                        if((length == 2 && times[i+1].innerHTML != 'varattu' && times[i+1].innerHTML != '09:00') || length == 1) { 
                            $.ajax({
                                url: '../lib/handler.php',
                                type: 'POST',
                                data: {
                                    day: date,
                                    time: time,
                                    type: type,
                                    length: length,
                                    email: email
                                },
                                success: function (data) {
                                    data = JSON.parse(data)
                                    for(let i =0; i < times.length; i++) {
                                        for(let j = 0; j < data.length; j++) {
                                            if(data[j].dayID == times[i].id && data[j].strTime == times[i].innerHTML) {
                                                if(data[j].length == 2 && times[i+1].innerHTML != 'varattu') {
                                                    times[i].innerHTML = 'varattu'
                                                    times[i].style.backgroundColor = 'red'
                                                    times[i].style.pointerEvents = 'none'
                                                    times[i+1].innerHTML = 'varattu'
                                                    times[i+1].style.backgroundColor = 'red'
                                                    times[i+1].style.pointerEvents = 'none'
                                                } else if(data[j].length == 1) {
                                                    times[i].innerHTML = 'varattu'
                                                    times[i].style.backgroundColor = 'red'
                                                    times[i].style.pointerEvents = 'none'
                                                }
                                            }
                                        }
                                    }
                                    alert("Varaus tehty onnistuneesti!")
                                    date = $('#date').text()
                                    time = $('#time').text()
                                    length = checkLength(type)
                                    email = $('#email').val()
                                    sendMail(email, time, date, length)
                                    let box = document.getElementsByClassName('reservationConfirm')
                                    date = document.getElementById('date').innerHTML = ""
                                    time = document.getElementById('time').innerHTML = ""
                                    email = document.getElementById('email').innerHTML = ""
                                    box[0].style.display = 'none'
                                }
                            })
                        } else {
                            alert("Virhe: Ajanvaraukselle ei ole riittävästi aikaa valitsemana ajankohtana.")
                            let date = document.getElementById('date').innerHTML = ""
                            let time = document.getElementById('time').innerHTML = ""
                            let email = document.getElementById('email').innerHTML = ""
                            box[0].style.display = 'none'
                        }
                    }
                }  
            }
        } else {
            alert('VIRHE: Sähköposti ei ole hyväksyttävässä muodossa')
        }
    })
    /*
    Jos sivun ylälaidassa olevaa 'login'-nappia painetaan, funktio ottaa ylös annetun käyttäjätunnuksen ja salasanan.
    Sitten AJAX:lla lähetetään POST-pyyntö adminLogin.php:lle joka vertaa annettua käyttäjätunnusta ja salasanaa tietokannassa olevan admininfo-pöydän tietoihin.
    Jos tiedot vastaavat pöydässä oleviin tietoihin, tietojen antaja ohjataan admin-sivulle.
    */
    $('#login').click(function () {
        let uid = $('#uid').val();
        let password = $('#password').val();
    
        $.ajax({
            url: '../admin/adminLogin.php',
            type: 'POST',
            data: {
                userID: uid,
                password: password
            },
            success: function (data) {
                if (data == 1) {
                    window.location.replace('../admin/adminPage.php')
                }
            }
        })
    })
})