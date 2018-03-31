setInterval(function() {
  timer();
}, 1000);

function timer() {
    chrome.tabs.query({
    active: true,               // Select active tabs
    lastFocusedWindow: true     // In the current window
    }, function(tabs) {
    var tabURL = tabs[0].url;
    var host = tabURL.split("/")[2];
    console.log(host);
    });
}
    
    //setInterval(function(){ alert("Hello"); }, 1000);