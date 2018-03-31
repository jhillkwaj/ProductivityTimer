function addStyleString(str) {
    var node = document.createElement('style');
    node.innerHTML = str;
    document.body.appendChild(node);
}

function injectHTML(text) {
      
    document.body.innerHTML += text;
 //    var x = document.createElement("div"); 
 //    x.className = 'alfred';                       // Create a <p> node
	// var t = document.createTextNode(text);    // Create a text node
	// x.appendChild(t);                                           // Append the text to <p>
	// document.body.appendChild(x);   

}

console.log("injecting productivity timer...");



addStyleString('.alfred { color: red;'+
	'position: fixed; /* Stay in place */ '+
	'font-size: 20px;' +
	'font-weight: bold;' +
 	'z-index: 0; /* Sit on top */ '+
 	'padding-top: 100px; /* Location of the box */ '+
	'padding-left: 0px;'+
	'top: 80%;'+
	'left: 40%;'+
	'background-color: #fefefe;' +
    //'margin: auto;' +
    'padding: 20px;' +
    'border: 2px solid #888;' +
    'width: 15%;' +
	 '}');

//injectHTML("Clock: 00:12:12");

injectHTML('<div class="alfred"> clock: 12:00 </div>');

