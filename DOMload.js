$(document).ready();



var fireworks = [];
var demolitions = [];

// var dropdown = document.getElementById('dropdown');
// dropdown.addEventListener('click', function (e){
// document.getElementById('output').innerText = ''

// })

function putThingsInDom(categories,types,products){

for (var i in products) {
    if (products[i].type <= 2) {
        fireworks.push(products[i]);
    }
    else {
        demolitions.push(products[i]);
    }
}

demolitions.forEach(function (demo) {

   $( "#destroyThePlanet" ).click(function() {
    $('#holder').toggleClass('holder')
          $("#output").append(`<div class = "col-md-4 card">
            <h2>Category: ${categories[types[demo.type].category].name}</h2>
            <h3>Type: ${types[demo.type].name}</h3>
            <h4>Product Name: ${demo.name}</h4>
            ${demo.description}</div>
            <div>`);
        });
})

fireworks.forEach(function (firework){


        $( "#familyFun" ).click(function() {
            $('#holder').toggleClass('holder')
            $("#output").append(`<div class = "col-md-4 card">
            <h2>Category: ${categories[types[firework.type].category].name}</h2>
            <h3>Type: ${types[firework.type].name}</h3>
            <h4>Product Name: ${firework.name}</h4>
            ${firework.description}</div>`);
        });

})





}

Factory.loadProducts(putThingsInDom);
