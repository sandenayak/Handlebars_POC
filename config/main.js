requirejs.config({
    baseUrl: '/',

    //Since Bootstrap is not an AMD module, shim it
	shim: {
		"bootstrap": {
			deps: ["jquery"],
			exports:"jQuery.fn.popover"
		}
	},	      
    paths: {

        // Vendor libraries paths
        "jquery":"libs/jquery.min",
        "text"  :"libs/text",
        "bootstrap":"libs/bootstrap.min",
        "handlebars":"libs/handlebars"        


        // JS file paths
       
    }

    
});

require(["js/index"]);

