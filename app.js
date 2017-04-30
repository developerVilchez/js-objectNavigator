function showProps() {
	var body = document.getElementsByTagName("body")[0];
	for(var prop in navigator) {
		console.log(prop); //Me muestra todas las propiedades del objeto navigator
		var elem = document.createElement("p");
		var text = document.createTextNode (prop + ": " + navigator[prop]);
		elem.appendChild(text);
		body.appendChild(elem);

	}

}