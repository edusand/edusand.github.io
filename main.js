navlinks = document.querySelectorAll("a");

navlinks.forEach(function(link) {
	// este corre solo una vez al iniciar
	link.addEventListener("click", function() {
		// cada que se de click desactivar demas botones activos	
		navlinks.forEach(function(link) {
			link.classList.remove("active");
		});

		// activar solo el seleccionado
		link.classList.toggle("active");
	});
});
