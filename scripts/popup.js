let toggleButton = document.getElementById('toggle');
console.log("Start");

//Check to see if site is enabled
enabled = false;

//Set the status to enabled or disabled
function setStatus(status) {
	if(status == true)
		on();
	else
		off();
}


function on() {
	console.log("Toggle On");
	chrome.browserAction.setBadgeText({text: 'ON'});
	chrome.browserAction.setBadgeBackgroundColor({color: '#F18846'});
	
}

function off() {
	console.log("Toggle Off");
	chrome.browserAction.setBadgeText({text: 'OFF'});
	chrome.browserAction.setBadgeBackgroundColor({color: '#4688F1'});
	}


setStatus(enabled);




// Enable or Disable site on click
chrome.browserAction.onClicked.addListener(
	function(tab) { 
		enabled = !enabled;
		setStatus(!enabled);
	});
