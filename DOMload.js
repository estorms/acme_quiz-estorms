var Factory = (function (fact) {
    console.log('DOMload running')

var fireworks =[]
var demo = []


// fact.getResults = function (categories, types, products) {
//     for (var i = 0; i < products.length; i++) {
//     if (products[i].type <= 3) {
//         fireworks.push(products[i])
//         console.log(fireworks)
//     }
//     }
// }


fact.destruction = function() {
        $( "#destroyThePlanet" ).click(function() {
          $("#output").append('destroyThePlanet');
        });

        $( "#familyFun" ).click(function() {
          $("#output").append('familyFun');
        });

}

return fact



})(Factory || {})
// Factory.prodMatch();
Factory.destruction();

