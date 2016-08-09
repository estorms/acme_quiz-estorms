$(document).ready();

var fireworks = [];
var demolitions = [];



function putThingsInDom(categories,types,products){
 for (var i in products) {
    if (products[i].type <= 2) {
        fireworks.push(products[i]);
    }
    else {
        demolitions.push(products[i]);
    }
}


$( "#familyFun" ).click(fireworksPop);
$( "#destroyThePlanet" ).click(demoPop);

function fireworksPop () {
    $("#output").empty();
    fireworks.forEach(function (firework){
        $("#output").append(`
        <div class="col-md-3 card">
        <h2>Category: ${categories[types[firework.type].category].name}</h2>
        <h3>Type: ${types[firework.type].name}</h3>
        <h5>Product Name: ${firework.name}</h5>
        <p>${firework.description}</p></div>
        <div class="col-md-1"></div>`)});

}

function demoPop () {
    $("#output").empty();
    demolitions.forEach(function (demo){
        $("#output").append(`
        <div class="col-md-3 card">
        <h2>Category: ${categories[types[demo.type].category].name}</h2>
        <h3>Type: ${types[demo.type].name}</h3>
        <h5>Product Name: ${demo.name}</h5>
        <p>${demo.description}</p></div>
        <div class="col-md-1"></div>`)});

}


}


//click, calls function, function clears, function runs for each




Factory.loadProducts(putThingsInDom);


