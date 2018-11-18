window.addEventListener("load", () => {

    let map = L.map('mapid').setView([62.49185, 27.7912], 14)
    
    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox.satellite',
        accessToken: 'pk.eyJ1IjoidGVlbXUxMjMiLCJhIjoiY2ptdWVseTYzMndkNjN2bWxoem1vcWF2YSJ9.llzhG6T3cNrZGMNPwvLdAw'
    }).addTo(map);

    let marker = L.marker([62.49185, 27.7912]).on('click', function () {
        centerLeafletMapToMarker(map, this)
    }).addTo(map).bindPopup("<b>Klikkaa zoomataksesi liikeeseemme!</b>").openPopup()

    function centerLeafletMapToMarker (map, marker) {
        let latLngs = [ marker.getLatLng()]
        let markerBounds = L.latLngBounds(latLngs)
        map.fitBounds(markerBounds)
    }
})
