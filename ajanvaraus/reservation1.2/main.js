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
    let box = document.getElementsByClassName('reservationConfirm')
    let date = document.getElementById('date')
    let time = document.getElementById('time')
    let times = document.querySelectorAll('li')

    for (let i = 0; i < times.length; i++) {

        

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
    
    
    
    document.getElementById('cancel').addEventListener('mouseup', () => {
        box[0].style.display = 'none'
        date.innerHTML = ""
        time.innerHTML = ""
    })

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
                    console.log(data)
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