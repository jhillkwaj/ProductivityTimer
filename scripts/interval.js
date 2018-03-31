setInterval(function() {
  timer();
}, 1000);

var port = chrome.runtime.connect({name: "timetic"});

function timer() {
	console.log("tic");

	checkStatus();
	port.postMessage({joke: "Knock knock"});
}