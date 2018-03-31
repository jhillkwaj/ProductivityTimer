setInterval(function() {
  interval();
}, 1000);

//var port = chrome.runtime.connect({name: "timetic"});

function interval() {
	console.log("tic");

	checkStatus();
	//port.postMessage({joke: "Knock knock"});
}