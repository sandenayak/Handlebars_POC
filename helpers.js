require(["handlebars"],function(Handlebars){
    //Handlebars.registerPartial("partials/template2.hbs");


    //Custom helper. not available in Handlebars
    Handlebars.registerHelper('if_eq', function(a, b, opts) {
        if(a == b) // Or === depending on your needs
            return opts.fn(this);
        else
            return opts.inverse(this);
    });

});
