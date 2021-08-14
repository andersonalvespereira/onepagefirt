// scroll page
$('.nav a[href^="#"]').on('click', function(e) {
	e.preventDefault();
	var id = $(this).attr('href'),
			targetOffset = $(id).offset().top;
			
	$('html, body').animate({ 
		scrollTop: targetOffset - 50
	}, 100);

	
	

});


// Function Alert
function funcaoAlert() {

	const name = document.getElementById("inputName4").value;
	const email = document.getElementById("inputEmail4").value;
	const subject = document.getElementById("exampleFormControlSubject").value;
	const comment = document.getElementById("exampleFormControlTextarea1").value;

	alert(`Meu nome: ${name}\nMeu e-mail: ${email}\nAssunto do meu contato: ${subject}\nMeu Comentário: ${comment}`)
};

