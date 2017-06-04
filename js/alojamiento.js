function cargarAlojamiento(){
  $.ajax({
    async: false,
    url: './docs/alojamiento.csv',
    dataType: 'text',
  }).done(procesarDatos);
}

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
        console.log(labels);
      }
    }
    field.push(info)
    info = []
  }

  /*var data = {
    nom: ,
    tipo ,
    dir: ,
    tel: ,
    email: ,
    web: ,
    price: ,
    zona: ,
    localizacion: new google.maps.LatLng(parse)
  }*
/*var marker = new google.maps.Marker({ //Line 1
		position: {"KR 7 127 45"}, //Line2: Location to be highlighted
		map: map//Line 3: Reference to map object
	});
*/
  codeAddress();
}

function codeAddress(address) {

    geocoder = new google.maps.Geocoder();

    //In this case it gets the address from an element on the page, but obviously you  could just pass it to the method instead

    geocoder.geocode( {
      'address' : address,
      componentRestrictions: {
        country: 'CO',
        locality: "DC"
      }
    }, function( results, status ) {
        if( status == google.maps.GeocoderStatus.OK ) {
            //In this case it creates a marker, but you can get the lat and lng from the location.LatLng
            map.setCenter( results[0].geometry.location );
            var marker = new google.maps.Marker( {
                map     : map,
                position: results[0].geometry.location
            } );
        } else {
            alert( 'Geocode was not successful for the following reason: ' + status );
        }
    } );
}

function makePoint(data, ico){
	var contentString =
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
  	'</div>';


    var infowindow = new google.maps.InfoWindow({
    	content: contentString,
    	maxWidth: 250
  	});


	var icon = {
		url: ico,
	    scaledSize: new google.maps.Size(42, 42), // scaled size
	    origin: new google.maps.Point(0,0), // origin
	    anchor: new google.maps.Point(0, 0) // anchor

	};
	var marker = new google.maps.Marker({ //Line 1
		position: {lat: data.lat, lng: data.lon}, //Line2: Location to be highlighted
		map: map,//Line 3: Reference to map object
		title: data.name, //Line 4: Title to be given
		icon: icon,
		price: data.price
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

  	placesPoints.push(marker);
};
