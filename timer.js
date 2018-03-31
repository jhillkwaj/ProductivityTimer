$(document).ready(function(){
    // Do NOT forget that the method is ASYNCHRONOUS
    chrome.tabs.query({
    active: true,
    currentWindow: true
    }, function(tabs) {
    var tabURL = tabs[0].url;
    console.log(tabURL);
    $( "p" ).text(tabURL);
    });
    
    
    //setInterval(function(){ alert("Hello"); }, 1000);
});