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
    console.log(length)
    return length
}


window.addEventListener('load', () => {
    let box = document.getElementsByClassName('reservationConfirm')
    let dateAndTime = document.getElementById('dateAndTime')
    console.log(box)
    let times = document.querySelectorAll('li')
    for (let i = 0; i < times.length; i++) {
        times[i].addEventListener('mouseup', () => {
            box[0].style.display = 'initial'
            let selectedTime = times[i].innerHTML
            let day = times[i].parentElement.parentElement.id
            day = checkDay(day)
            if(dateAndTime.innerHTML === "") {
                dateAndTime.append(selectedTime)
                dateAndTime.append(day)
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
        dateAndTime.innerHTML = ""
    })

    /*$(document).ready(function () {
        $("#submit").keyup(function () {
            $.post('calendar.php', {
                dayid: day,
                startTime: selectedTime,
                type: getType(),
                length: checkLength(getType())
            })
        })
    })*/
})