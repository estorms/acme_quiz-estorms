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
                products = catalog[2].products[0]
                console.log('Factory loaded')


                    function matchup(x, y, z) {
                        if  (x.id === y.category && y.category === z.type) {
                            console.log('matchFound')
                        }
                    }
                    matchup(categories, types, products);

            })

        }

    return fact

})(Factory || {})
Factory.loadProducts();





