require(['jquery','bootstrap','handlebars','text!partials/template1.tpl.html'],function ($,bootstrap, Handlebars, template1) {


   //alert(testApp.calculate());
   	var cachedTemplate = Handlebars.compile(template1);

    $(document).ready(function(){

       // Simulate AJAX response
		var myData = {
			name:"pv page",
			version:"R2",
			team:"Hummers",
			members:["sandy","manas","vaibhav"],
            showIf: "show"
		};


		var compiledTemplate = cachedTemplate({data:myData});
		$("#wrapper").html(compiledTemplate);
    });
});
