let link = document.getElementById('contact').addEventListener('click', scroll)

function scroll () {
	if (document.documentMode || /Edge/.test(navigator.userAgent)) {
		window.location.href = "contact.html";
	} else {
		window.scrollTo({
			top: 5000,
			left: 0,
			behavior: 'smooth'
		})
	}
}
