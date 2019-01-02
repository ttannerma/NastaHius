window.addEventListener('load' , () => {
    /*
    Admin-sivulla olevaan 'poista varaus'-nappulaan lisätään eventListener, joka ottaa talteen adminin antamat tiedot tietokannasta poistettavasta rivistä.
    Sitten lähetetään AJAX:lla POST-pyyntö adminDelete.php:lle, joka yrittää poistaa annettuja tietoja vastaavan rivin.
    Jos poisto onnistuu alert ilmoittaa että poisto onnistui. Muuten alert ilmoittaa, että poisto ei onnistunut.
    
    document.getElementById('delete').addEventListener('click', () => {
        let day = document.getElementById('day').value
        let strTime = document.getElementById('startTime').value
        let length = document.getElementById('length').value
       if(day != "" && strTime != "" && length != "") {
            $.ajax({
                url: 'adminDelete.php',
                type: 'POST',
                data: {
                    day: day,
                    strTime: strTime,
                    length: length
                },
                success: function (data) {
                    alert(data)
                }
            })
        }
    })
    */

    /*
    Admin-sivulla olevaan 'lisää'-nappulaan lisätään eventListener, joka ottaa talteen adminin antamat tiedot tietokantaan lisättävästä rivistä.
    Sitten lähetetään AJAX:lla POST-pyyntö handler.php:lle, joka lisää tietokantaan rivin annetuilla tiedoilla.
    Jos lisäys onnistuu alert ilmoittaa että lisäys onnistui.
    */
    document.getElementById('uAdd').addEventListener('click', () => {
        let day = document.getElementById('uDay').value
        let strTime = document.getElementById('uStartTime').value
        let type = document.getElementById('uType').value
        let length = document.getElementById('uLength').value
        if (day != "" && strTime != "" && type != "" && length != "") {
            $.ajax({
                url: '../lib/handler.php',
                type: 'POST',
                data: {
                    day: day,
                    time: strTime,
                    type: type,
                    length: length,
                },
                success: function() {
                    alert('Lisäys onnistui!')
                }
            })
        }
    })
})