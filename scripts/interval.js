var ports = [];


chrome.runtime.onConnect.addListener(function(newPort) {
    ports.push(newPort);
});

setInterval(function() {
  interval();
}, 1000);


function interval() {
	console.log("tic");
	var enabled = checkStatus();

	if(enabled) {
	for (var i = 0 ; i < ports.length; i++)
		ports[i].postMessage({joke: "Knock knock"});
	}

}