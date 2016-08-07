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

                    for (var i in products){
                        productsA = products[i]
                        for (var e in productsA) {
                            productsB = productsA[e]

                        console.log(productsB)
                    }
                }

                    productsB.forEach(function(car) {


                        document.getElementById('output').innerHTML += // append each object to targeted DOM element
                        `<div class="col-md-4 allCars">
                        <h3 class="carColumn">${car.id} ${car.category}</h3>
                        <p class="carColumn">${car.name}
                        <p class="carColumn">&#36;${car.description}
                        </p></p></div>`
                         })


                        })












                             $( "#destroyThePlanet" ).click(function() {
                             $("#output").append(`${products}`);
                                });



            }



    return fact

})(Factory || {})

Factory.loadProducts();

})





