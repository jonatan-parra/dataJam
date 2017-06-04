var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function(data) {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
	var myArr = xmlhttp.responseText;
	var json =  JSON.parse(myArr);
	console.log(json);
    }
};
xmlhttp.open("GET", url, true);
xmlhttp.send();
