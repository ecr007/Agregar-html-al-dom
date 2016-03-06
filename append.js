var script   = document.createElement("script");
script.type  = "text/javascript";
script.src   = "path/to/your/javascript.js";    // use this for linked script
script.text  = "alert('voila!');"               // use this for inline script
document.body.appendChild(script);
