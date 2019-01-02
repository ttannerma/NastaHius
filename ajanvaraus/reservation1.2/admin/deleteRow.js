window.addEventListener('load' , () => {

    // Loop through every button with id "delButtonRow" and add event listener to it.
    [...document.querySelectorAll('#delButtonRow')].forEach(function(item) {
        item.addEventListener('click', () =>  {
            // Get content in table cells.
            var row = item.closest('tr')
            var day = row.querySelector('#day').textContent
            var time = row.querySelector('#time').textContent
            var duration = row.querySelector('#duration').textContent
            
            /*
            console.log(day)
            console.log(time)
            console.log(duration)
            */
           
           // Checkbox for confirmation that user wants to delete a row.
            var del=confirm("Haluatko varmasti poistaa varauksen?")
            if(del==true) {
            // AJAX POST request to adminDelete.php that will delete the row from database. Alerts if it was succesful or not.
            $.ajax({
                url: 'adminDelete.php',
                type: 'POST',
                data: {
                    day: day,
                    strTime: time,
                    length: duration
                },
                success: function (data) {
                    alert(data)
                }
            })
        }
        })
         })
         
})