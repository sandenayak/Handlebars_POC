require(['jquery','bootstrap', 'handlebars','text!partials/template1.tpl.html'],function ($,bootstrap, Handlebars, template1) {
   
   	var cachedTemplate = Handlebars.compile(template1);

    $(document).ready(function(){
      /*  if (typeof $.fn.popover == 'function') { 
		   alert("bootstrap loaded");
		}*/ 

		// API Manager is page specific JS Object that will hold all URL's and methods to construct URL's
		var apiManager = {
			// urls for ajax calls
			urls:{
				updateQuantity:"/sf/.../....",
				updateProducts:"/sf/.../....",
			}

			//methods to construct urls by passing dynamic args
		}

		var myData = {
			name:"pv page", 
			version:"R2", 
			team:"Hummers",
			members:["sandy","manas","vaibhav"]
		};


		var compiledTemplate = cachedTemplate({data:myData});
		$("#wrapper").html(compiledTemplate);
    });
});

