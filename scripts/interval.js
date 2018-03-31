// Maps between domain and time spent on domain
var times = []; 

// List of ports and their associated websites
var ports = [];


chrome.runtime.onConnect.addListener(function(newPort) {

	console.log("Connecting a new port [id: " + newPort + "] [domain: " + newPort.name + "]");
    ports.push({"port": newPort, "domain": newPort.name});// newPort.name should be the upper level domain

     // Start new counter for each domain
    if (times[newPort.name] == null) {
    	times[newPort.name] = 0;
    }

    newPort.onDisconnect.addListener(function(port) {
    	console.log("DISCONNECTED!!!");
    	// Remove disconnected port
    	for (var i = ports.length - 1; i >= 0;  i--) {

    		if (ports[i]["port"] == port) {
    			ports.splice(i,1);
    			continue;
    		}
    	}
	});

});



// chrome.runtime.onDisconnect.addListener(function(oldPort) {
   
//    	console.log("Disconnected port [id: " + oldPort + "] [domain: " + ports[oldPort] + "]");
//     ports[oldPort] = null;
// });

setInterval(function() {
  interval();
}, 1000);


function interval() {
	
	//console.log("tic");

	//checkStatus();

	// Increase the time for each website by 1
	for (var website in times) {
		times[website]++;
	}

	// Send out time ticks to each tab connected to this extension
	for (var i = 0; i < ports.length;  i++) {
		console.log("Sending time to " + ports[i]["domain"]);
		// get time associated to website
		var time = times[ports[i]["domain"]];
		ports[i]["port"].postMessage({counter: time});
	}

}