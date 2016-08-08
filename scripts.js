var Factory = (function (fact) {


var categories = null;
var types = null;
var products = null;

    // fact.getProducts = function () {
    //     console.log("categories", categories, "types", types, "products", products)
    //     return [categories, types, products]
    // }


    fact.loadProducts = function (putThingsInDom){
        Promise.all ([
            $.getJSON('categories.json'),
            $.getJSON('types.json'),
            $.getJSON('products.json')
            ])

                .then(function (catalog) {
                categories = catalog[0].categories
                console.log(categories)
                types = catalog[1].types
                console.log(types)
                products = catalog[2].products[0]
                console.log(products)

                    putThingsInDom(categories,types,products)
                })

            }
            console.log(categories)

return fact;


})

(Factory || {})


function putThingsInDom(variable1,variable2,variable3){
    console.log("Insert DOM manuipluation here!!")
}


Factory.loadProducts(putThingsInDom)








