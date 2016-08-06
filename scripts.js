var Factory = (function (fact) {
var categories = []
var types = []
var products = []

    fact.loadProducts = function (){
        Promise.all ([
            $.getJSON('categories.json'),
            $.getJSON('types.json'),
            $.getJSON('products.json')
            ])

                .then(function (catalog) {
                categories = catalog[0].categories
                types = catalog[1].types
                products = catalog[2].products
                console.log('Factory loaded')
                console.log(categories, types, products)



                        for (var i in products) {
                        if  (categories.id === types.category && types.category === products.type) {

                             $( "#destroyThePlanet" ).click(function() {
                             $("#output").append(`${products[i]}`);
                                });
                        }
                    }

            })

        }

    return fact

})(Factory || {})
Factory.loadProducts();





