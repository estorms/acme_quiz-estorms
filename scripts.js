var Factory = (function (fact) {


var categories = null;
var types = null;
var products = null;


    fact.loadProducts = function (putThingsInDom){
        Promise.all ([
            $.getJSON('categories.json'),
            $.getJSON('types.json'),
            $.getJSON('products.json')
            ])

                .then(function (catalog) {
                categories = catalog[0].categories
                types = catalog[1].types
                products = catalog[2].products[0]
                putThingsInDom(categories,types,products)

                })

            }

return fact;

})

(Factory || {})

