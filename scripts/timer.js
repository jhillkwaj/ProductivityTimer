setInterval(function() {
  timer2();
}, 1000);

function timer2() {
    chrome.tabs.query({
    active: true,               // Select active tabs
    lastFocusedWindow: true     // In the current window
    }, function(tabs) {
    var tabURL = tabs[0].url;
    var host = tabURL.split("/")[2];
    console.log(host);

    //Try to get the website by key
    chrome.storage.sync.get([host], function(result) {
          console.log('Value currently is ' + result);
            var newTime = 0;
            if (result){
                newTime += parseInt(result) + 1;
                chrome.storage.sync.set({result: newTime}, function() {
                console.log('Value is set to ' + newTime);
                });
            }
        });

    });
}
    /*
        chrome.storage.sync.set({key: value}, function() {
          console.log('Value is set to ' + value);
        });
      
        chrome.storage.sync.get(['key'], function(result) {
          console.log('Value currently is ' + result.key);
        });
    */