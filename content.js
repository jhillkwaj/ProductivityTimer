function injectJs(link) {
      //  var scr = document.createElement("script");
       // scr.type="text/javascript";
        
    	var h = document.createElement("H1");
    	var t = document.createTextNode("Hello World");
    	h.appendChild(t);

    	//scr.appendChild(h);
    	document.body.appendChild(h);
}

console.log("fuck u");

injectJs("aaa");