var mostrando_museos;
var mostrando_restaurantes;
var mostrando_alojamiento;


$(document).ready(function() { 
	ocultar_todo();
	cargarAlojamiento();

	$('#transporte').css('visibility', 'hidden');
	$('#transporte').css('display', 'none');
});

function selecionar_favorito(){
	seleccion = document.getElementById("seleccion1").value;
	if (seleccion == 1) {
		ocultar_todo();
	}
	ocultar_todo();
	if (seleccion == 2) {
		$('#alojamiento').css('visibility', 'visible');
		$('#alojamiento').css('display', 'block');


		$('#transporte').css('visibility', 'hidden');
		$('#transporte').css('display', 'none');



		
	}
	if (seleccion == 3) {
		$('#restaurantes').css('visibility', 'visible');
		$('#restaurantes').css('display', 'block');


		$('#transporte').css('visibility', 'hidden');
		$('#transporte').css('display', 'none');
	}
	if (seleccion == 4) {
		$('#museos').css('visibility', 'visible');
		$('#museos').css('display', 'block');


		$('#transporte').css('visibility', 'hidden');
		$('#transporte').css('display', 'none');





		


	}
	if (seleccion == 5) {
		$('#transporte').css('visibility', 'visible');
		$('#transporte').css('display', 'block');
	}


}

function selecionar_transporte(){
	seleccion = document.getElementById("seleccion2").value;
	if (seleccion == 1) {
		ocultar_todo();
	}
	ocultar_todo();
	if (seleccion == 2) {
		$('#mapa_transmilenio').css('visibility', 'visible');
		$('#mapa_transmilenio').css('display', 'block');

		
	}
	if (seleccion == 3) {
		$('#puntos_recarga').css('visibility', 'visible');
		$('#puntos_recarga').css('display', 'block');
	}
	if (seleccion == 4) {
		$('#alquiler').css('visibility', 'visible');
		$('#alquiler').css('display', 'block');
	}

}

function ocultar_todo(){
	$('#alojamiento').css('visibility', 'hidden');
	$('#alojamiento').css('display', 'none');

	$('#restaurantes').css('visibility', 'hidden');
	$('#restaurantes').css('display', 'none');

	$('#museos').css('visibility', 'hidden');
	$('#museos').css('display', 'none');

	$('#mapa_transmilenio').css('visibility', 'hidden');
	$('#mapa_transmilenio').css('display', 'none');

	$('#puntos_recarga').css('visibility', 'hidden');
	$('#puntos_recarga').css('display', 'none');

	$('#alquiler').css('visibility', 'hidden');
	$('#alquiler').css('display', 'none');

	$('#busqueda_museos').css('visibility', 'hidden');
	$('#busqueda_museos').css('display', 'none');


	$('#busqueda_restaurantes').css('visibility', 'hidden');
	$('#busqueda_restaurantes').css('display', 'none');

	

	mostrando_museos= false;
	mostrando_restaurantes = false;
	mostrando_alojamiento = false;
	
}


function myFunction(i, t) {
  var input, filter, table, tr, td, i;
  input = document.getElementById(i);
  filter = input.value.toUpperCase();
  table = document.getElementById(t);
  tr = table.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }       
  }
}


function activar_busqueda_museos(){
	cargar_tabla_museos();
	if (mostrando_museos == false){
		$('#busqueda_museos').css('visibility', 'visible');
		$('#busqueda_museos').css('display', 'block');
		mostrando_museos = true;
	} else {
		$('#busqueda_museos').css('visibility', 'hidden');
		$('#busqueda_museos').css('display', 'none');
		mostrando_museos = false;
	}
}


function activar_busqueda_restaurantes(){
	console.log("Entro activar_busqueda_restaurantes")
	cargar_tabla_restaurantes();
	if (mostrando_restaurantes == false){
		$('#busqueda_restaurantes').css('visibility', 'visible');
		$('#busqueda_restaurantes').css('display', 'block');
		mostrando_restaurantes = true;
	} else {
		$('#busqueda_restaurantes').css('visibility', 'hidden');
		$('#busqueda_restaurantes').css('display', 'none');
		mostrando_restaurantes = false;
	}
}

function activar_busqueda_alojamiento(){
	console.log("Entro activar_busqueda_restaurantes")
	cargar_tabla_alojamiento();
	if (mostrando_restaurantes == false){
		$('#busqueda_restaurantes').css('visibility', 'visible');
		$('#busqueda_restaurantes').css('display', 'block');
		mostrando_restaurantes = true;
	} else {
		$('#busqueda_restaurantes').css('visibility', 'hidden');
		$('#busqueda_restaurantes').css('display', 'none');
		mostrando_restaurantes = false;
	}
}



function cargar_tabla_museos(museos, direccion){
	//var museos = ["museo Nacional", "Museo del oro", "Museo jdjdj"];
	//var direccion = ["museo Nacional", "Museo del oro", "Museo jdjdj"];


		datos = traer('museos');
		var museos = getArrayColumn(datos, "nombre_del_museo");
		var direccion = getArrayColumn(datos, "direccion");





	respuesta = "";

	respuesta = ' <table id="myTable"> ' +
                ' <tr class="header"> ' +
                ' <th style="width:60%;">Nombre</th> ' +
                ' <th style="width:40%;">Dirección</th> ' +
                ' </tr>';


	for (var i = 0; i < museos.length; i++) {
		
		respuesta += '<tr onclick="museos_mensaje( ' + i +' )">' + '<td>' + museos[i] + '</td>'  + '<td>' + direccion[i] + '</td>'  + '</tr>'
			
	}
// onclick="selecionar_transporte()"
	respuesta += '</table>'

	document.getElementById("mi_tabla_1").innerHTML = respuesta;
}

function museos_mensaje(nombre){
	respuesta = museoInfo(nombre);
	console.log(respuesta);
	var r = "";
	

	document.getElementById("titulo").innerHTML = respuesta["nombre_del_museo"];
	
	r = "<strong> Caracter: </strong>" +  respuesta["caracter"];
	r += "<br>"
	r += " <strong> Celular:  </strong>" + respuesta["celular"];
	r += "<br>"
	r += " <strong> Correo:  </strong>" +  respuesta["correo_electr_nico"];
	r += "<br>"
	r += " <strong>  Dirección: </strong>" +  respuesta["direccion"];
	r += "<br>"
	r += "<strong>  localidad:  </strong>" +  respuesta["localidad"];
	r += "<br>"
	
	r += " <strong> Página web: </strong> " + respuesta["pagina_web"];
	r += "<br>"
	r += " <strong>  Telefono fijo:  </strong>" + respuesta["telefono_fijo"];


	console.log(r)
	document.getElementById("contenido1").innerHTML = r;

	$('#myModal').modal('show'); // abr


}


function cargar_tabla_restaurantes(){
	
	var restaurantes = ["restaurante", "lugar", "ksdkasd", "adsdsda"];
	var direccion = ["restaurante", "lugar", "ksdkasd", "adsdsda"];
	respuesta = "";

	respuesta = ' <table id="myTable2"> ' +
                ' <tr class="header"> ' +
                ' <th style="width:60%;">Nombre</th> ' +
                ' <th style="width:40%;">Dirección</th> ' +
                ' </tr>';


	for (var i = 0; i < restaurantes.length; i++) {
		respuesta += '<tr>' + '<td>' + restaurantes[i] + '</td>'  + '<td>' + direccion[i] + '</td>'  + '</tr>'
		console.log("en for")
	}

	respuesta += '</table>'

	document.getElementById("mi_tabla_2").innerHTML = respuesta;
}


function cargar_tabla_alojamiento(){
	
	//var restaurantes = ["restaurante", "lugar", "ksdkasd", "adsdsda"];
	//var direccion = ["restaurante", "lugar", "ksdkasd", "adsdsda"];
	console.log("Entro a cargar_tabla_alojamiento")
	restaurantes = sitios();
	direccion = direcciones();
	console.log(restaurantes)
	respuesta = "";

	respuesta = ' <table id="myTable3"> ' +
                ' <tr class="header"> ' +
                ' <th style="width:60%;">Nombre</th> ' +
                ' <th style="width:40%;">Dirección</th> ' +
                ' </tr>';


	for (var i = 0; i < restaurantes.length; i++) {
		respuesta += '<tr >' + '<td>' + restaurantes[i] + '</td>'  + '<td>' + direccion[i] + '</td>'  + '</tr>'
		console.log("en for")
	}

	respuesta += '</table>'

	document.getElementById("mi_tabla_3").innerHTML = respuesta;
}







// Slider 
var rangeSlider = function(){
  var slider = $('.range-slider'),
      range = $('.range-slider__range'),
      value = $('.range-slider__value');
    
  slider.each(function(){

    value.each(function(){
      var value = $(this).prev().attr('value');
      $(this).html(value + " km");
    });

    range.on('input', function(){
      $(this).next(value).html(this.value + " km");
    });
  });
};

rangeSlider();


              
