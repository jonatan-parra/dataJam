function fullJSON(url){
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function(data) {
	if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
	    var myArr = xmlhttp.responseText;
	    var json =  JSON.parse(myArr);
	    //	console.log(json);
	    llenar(json);
	}
    };
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
    
}
var variable;
function llenar(data){
    variable=data;
}
function traer(url){
    fullJSON(url);
    var local=variable;
    variable=null;
    return local;
}
