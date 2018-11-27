//Sets the Google maps element and it's container to always be the same size as #footerInfo.

function resize () {
    let footerInfoHeight = document.getElementById('footerInfo').offsetHeight+'px'
    let map = document.getElementById('ifrm')
    let mapContainer = document.getElementById('map')
    mapContainer.style.height = footerInfoHeight
    map.style.height = footerInfoHeight
}
resize()
window.addEventListener('resize', resize)
