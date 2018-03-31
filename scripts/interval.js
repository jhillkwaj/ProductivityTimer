

var port;

chrome.runtime.onConnect.addListener(function(newPort) {
    port = newPort;
});

setInterval(function() {
  interval();
}, 1000);


function interval() {
	console.log("tic");

	checkStatus();
	port.postMessage({joke: "Knock knock"});
}