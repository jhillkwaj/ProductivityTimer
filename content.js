//    chrome.tabs.query({
//     active: true,
//     currentWindow: true
//     }, function(tabs) {
//     var tabURL = tabs[0].url;
//     console.log(tabURL);
// 	$( "p" ).text(tabURL);
// });

function addStyleString(str) {
    var node = document.createElement('style');
    node.innerHTML = str;
    document.body.appendChild(node);
}

function injectHTML(text) {
      
    //document.body.innerHTML += text;
    var x = document.createElement("div"); 
    x.id = 'alfredClock';
    x.className = 'alfred';                       // Create a <p> node
	var t = document.createTextNode(text);    // Create a text node
	x.appendChild(t);                                           // Append the text to <p>
	document.body.appendChild(x);   

}


function changeTime(newTime) {
	var clock = document.getElementById('alfredClock');
	clock.innerHTML = '';
	var t = document.createTextNode(newTime);
	clock.appendChild(t);
}

console.log("injecting productivity timer...");



addStyleString('.alfred { color: red;'+
	'position: fixed; /* Stay in place */ '+
	'font-size: 20px;' +
	'font-weight: bold;' +
 	'z-index: 100; /* Sit on top */ '+
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

injectHTML('clock: 00:00');

changeTime('1:00');
changeTime('2:00');
changeTime('3:00');

time = 0; 
chrome.runtime.onConnect.addListener(function(port) {
  port.onMessage.addListener(function(msg) {
  	console.log("changeTime");
  	if(port.name == "timetick") {
	  	time++;
	    changeTime('2:'+ time);
	}
  });
});




