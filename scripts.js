$(document).ready(function (){

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

                    var productNames = []

                    for (var i in products){
                        productsA = products[i]
                        for (var e in productsA) {
                            productsB = productsA[e]

                        console.log(productsB)
                         $("#output").append(`${productsB.name} ${productsB.type} ${productsB.description}`);

                    }
                }s
                        })












                             $( "#destroyThePlanet" ).click(function() {
                             $("#output").append(`${products}`);
                                });



            }



    return fact

})(Factory || {})

Factory.loadProducts();

})
