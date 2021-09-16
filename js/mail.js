var form = document.getElementById('form');

form.addEventListener("submit", (e) => {
	e.preventDefault();
	var nombre = document.getElementById('contact_name').value;
	var email = document.getElementById('contact_email').value;
	var subject = document.getElementById('contact_subject').value;
	var mensaje = document.getElementById('contact_message').value;
	var datos = new FormData();
	datos.append("nombre", nombre);
	datos.append("email", email);
	datos.append("subject", subject);
	datos.append("mensaje", mensaje);

			fetch('assets/mail.php', {
				method: 'POST',
				body: datos
			})

			.then(res => res.json())
			.then(data => {
				const Toast = Swal.mixin({
					toast: true,
					position: 'top-end',
					showConfirmButton: false,
					timer: 3000,
					timerProgressBar: true,
					didOpen: (toast) => {
					  toast.addEventListener('mouseenter', Swal.stopTimer)
					  toast.addEventListener('mouseleave', Swal.resumeTimer)
					}
				  })
				  
				  Toast.fire({
					icon: 'success',
					title: 'Mensaje Enviado'
				  })
			})
			.catch(error => Swal.fire({
				icon: 'error',
				title: 'Algo ha salido mal',
				text: 'Intentelo mas tarde o envie un correo a mi email',
				footer: '<a href="mailto:kroalca@gmail.com">kroalca@gmail.com</a>'
			  }));

			  document.getElementById('contact_name').value = "";
			  document.getElementById('contact_email').value = "";
			  document.getElementById('contact_message').value = "";
})



