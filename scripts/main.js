
/**
** CLIENTE
*/

$(document).ready(function() {
	
	
			$('#datepicker').datepicker({altFormat: "yyyy-mm-dd"});

   /*Disque scroll 
   REVISAR
   */ $('a[href*=#]').bind('click',function(event){
        var $anchor = $(this);
 
        /*
        if you don't want to use the easing effects:
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1000);
        */
        $('html, body').stop().animate({
           scrollTop: $($anchor.attr('href')).offset().top
        }, 2000,'easeInOutExpo');
   
        event.preventDefault();
    });
    
    $('.frase1').flowtype({
        minimum: 500,
        maximum: 1200,
        minFont: 14,
        maxFont: 35,
        fontRatio: 30
    });
    
   $('.sel-form-sangre').click( function () {
      $('.active').removeClass('active');
      $(this).addClass('active');
	   tipoSangreSol = $(this).parent().parent().index();
	  // console.log(tipoSangreSol);
    });
    
     $('.form-sel-button').click( function () {
      $('.form-sel-button').removeClass('active-reg');
      $(this).addClass('active-reg');
    });
	
	/*Enviar solicitud al servidor*/
    
	
});

	var tipoSangreSol = 0;
	




/**
** SERVIDOR
*/
/*Envio de solicitud de sangre*/
function enviarSolicitud () {
		var tipo = tipoSangre(tipoSangreSol);
		console.log(tipo);
		nombre = $('#nombreSol').val();
		//console.log($('#nombreSol').val());
		donadores = $('#input-donadores').val();
		acudir = $('#acudirSol').val();
		contacto = $('#contactoSol').val();
	
		$.ajax({
				type: "POST",
				url: "/bloodor/html/registrarSolicitud.php",
				data: {
				   "tipoSol" : tipo,
					"nombreSol" : nombre,
					"donadoresSol" : donadores,
					"acudirSol" : acudir,
					"contactoSol" : contacto
			   },
				success:function(result) {
					alert("Registro exitoso");
				}
			 });
}


/*Registro usuario en el servidor*/
function enviarRegistro() {
	previo = ($('.active-reg').index == 1) ? "si" : "no";
	
	$.ajax({
		type: "POST",
		url: "/bloodor/html/registrarUsuario.php",
		data:{
			"correoDonador": $('#correoRegistro').val(),
			"passDonador": $('#passRegistro').val(),
			"nombreDonador": $('#nombreRegistro').val(),
			"tipoSDonador": $('#reg-tipo-sangre option:selected').text(),
			"fechaUDonador": $('#datepicker').val(),
			"donadorPrevio": previo
			
		},
		success:function(result) {
					alert(result);
				}
	});
}
	
	function tipoSangre(ts) {
		switch (ts) {
			case 0:
				return "Todas";
				break;
			case 1:
				return "A+";
				break;
			case 2: 
				return "A-";
				break;
			case 3:
				return "B+";
				break;
			case 4:
				return "B-";
				break;
			case 5:
				return "AB+";
				break;
			case 6: 
				return "AB-";
				break;
			case 7: 
				return "O+";
				break;
			case 8:
				return "O-";
				break;
		}	
		
	}