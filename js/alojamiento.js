function cargarAlojamiento(){
  $.ajax({
    url: './docs/alojamiento.csv',
    dataType: 'text',
    complete: function(){
      console.log(direcciones());
      console.log(sitios());
      /*for(i = 0; i < pos.length; i++){
        geocodeAddress(pos[i]);
      }*/
    }
  }).done(procesarDatos);
}

function direcciones(){
  var dir =[]
  var back = ""
  for(i = 0; i < pos.length; i++){
    if (back != pos[i]['dir']){
      dir.push(pos[i]['dir']);
      back = pos[i]['dir'];
    }
  }
  return dir;
}

function sitios(){
  var nombreSitios =[]
  var back = ""
  for(i = 0; i < pos.length; i++){
    if (back != pos[i]['nom']){
      nombreSitios.push(pos[i]['nom']);
      back = pos[i]['nom'];
    }
  }
  return nombreSitios;
}


var pos = [];
function procesarDatos(data){
  var allRows = data.split(/\r?\n|\r/);
  var labels = []
  var field = []
  var info = []
  for (var singleRow = 0; singleRow < allRows.length; singleRow++) {
    var rowCells = allRows[singleRow].split(',');
    for (var rowCell = 0; rowCell < rowCells.length; rowCell++) {
      if (singleRow === 0) {
        labels.push(rowCells[rowCell])
      } else {
        info.push(rowCells[rowCell])
        var alojamientoData = {
          nom: rowCells[2],
          tipo: rowCells[3],
          dir: rowCells[4],
          localidad: rowCells[5],
          tel: rowCells[6],
          email: rowCells[7],
          web: rowCells[8],
          price: rowCells[9],
          zona: rowCells[10],
          localizacion: ""
        }
          pos.push(alojamientoData);
      }
    }
    field.push(info)
    info = []
  }
  //geocodeAddress(alojamientoData)

}

var cont = 0;

function geocodeAddress(datos) {
  //console.log(datos['nom']);
  geocoder.geocode({
    'address': "HOTEL SUNA BACATA"
    /*componentRestrictions: {
      country: 'CO',
      locality: "DC"
    }*/
  }, function(results, status) {
    if (status === 'OK') {
      //map.setCenter(results[0].geometry.location);
      var marker = new google.maps.Marker({
        map: map,
        position: results[0].geometry.location
      });
    } else if (status == google.maps.GeocoderStatus.OVER_QUERY_LIMIT) {
        wait = true;
        setTimeout("wait = true", 2000);
        }
  });
}

function makePoint(data){
	/*var contentString =
		'<div id="content">'+
  		'<div id="siteNotice">'+
  		'</div>'+
  		'<h5 id="firstHeading" class="firstHeading">' + data.name + '</h5>'+
    	'<div id="bodyContent">'+
    		'<img src = "' + data.img + '" width = "200">' +
    		'<br><b>Addres: </b>' + data.addres +
    		'<br><b>Phone: </b>' + data.phone +
    		'<!-- Trigger the modal with a link -->' +
		'<br><a data-toggle="modal" href="#myModal">More info...</a>' +
    	'</div>'+
  	'</div>';*/


    /*var infowindow = new google.maps.InfoWindow({
    	content: contentString,
    	maxWidth: 250
  	});*/


	/*var icon = {
		url: ico,
	    scaledSize: new google.maps.Size(42, 42), // scaled size
	    origin: new google.maps.Point(0,0), // origin
	    anchor: new google.maps.Point(0, 0) // anchor

	};*/

  var p = geocodeAddress(data['dir']);
  console.log(p);

	var marker = new google.maps.Marker({ //Line 1
		position: p, //Line2: Location to be highlighted
		map: map,//Line 3: Reference to map object
		//title: data.name, //Line 4: Title to be given
		//icon: icon,
		//price: data.price
	});


	/*marker.addListener('click', function() {
	   	if (infWindow) { infWindow.close();}
        infowindow.open(map, marker);
        infWindow = infowindow;
        document.getElementById("modalName").innerHTML = data.name;
        document.getElementById('modalImg').src = data.img;
        document.getElementById('modalAddres').innerHTML = data.addres;
        document.getElementById('modalPhone').innerHTML = data.phone;
        document.getElementById('modalCompany').innerHTML = data.company;
        document.getElementById('modalType').innerHTML = data.type;
        document.getElementById('modalArea').innerHTML = data.area;
        distance(data.lat, data.lon);

  	});*/

  	//placesPoints.push(marker);
};
