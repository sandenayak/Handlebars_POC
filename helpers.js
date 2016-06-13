require(["handlebars"],function(Handlebars){
    //Handlebars.registerPartial("partials/template2.hbs");


    //Custom helper. not available in Handlebars
    Handlebars.registerHelper('if_eq', function(a, b, opts) {
        console.log(opts);
        if(a == b) // Or === depending on your needs
            return opts.fn(this);
        else
            return opts.inverse(this);
    });

    Handlebars.registerHelper({
        eq: function (v1, v2) {
            return v1 === v2;
        },
        ne: function (v1, v2) {
            return v1 !== v2;
        },
        lt: function (v1, v2) {
            return v1 < v2;
        },
        gt: function (v1, v2) {
            return v1 > v2;
        },
        lte: function (v1, v2) {
            return v1 <= v2;
        },
        gte: function (v1, v2) {
            return v1 >= v2;
        },
        and: function (v1, v2) {
            return v1 && v2;
        },
        or: function (v1, v2, opts) {
            return v1||v2?opts.fn(this):opts.inverse(this);
        }
    });


});
