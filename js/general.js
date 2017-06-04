var arr=[];
function fullJSON(url){
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange =function callbackJ (data) {
	if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
 	    var myArr = xmlhttp.responseText;
	    var json =  JSON.parse(myArr);

	        //	    console.log(json);
	    arr.push(json);
	}
    };
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
}
var variable;
function llenar(data){
    variable=data; }
function traer(nombre){
    if(nombre=="museos"){
	if(arr.length>0){
	    return arr[0];
	}else{
	    console.log("Estamos trabajando");
	}
    }
     if(nombre==""){
	if(arr.length>0){
	    return arr[0];
	}else{
	    console.log("Estamos trabajando");
	}
    }
}
function getArrayColumn(json, colname){
    Arr=[];
    for(var i=0; i<json.length;i++){
	Arr.push(json[i][colname]);
    }
    return Arr;
}

function museoInfo(ele){
    json=traer("museos");
    return json[i];
}
fullJSON("https://www.datos.gov.co/resource/mdh3-rurf.json");  
