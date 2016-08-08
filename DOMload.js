var fireworks = [];
var demolitions = [];

function putThingsInDom(categories,types,products){

for (var i in products) {
    if (products[i].type <= 2) {
        fireworks.push(products[i])
    }
    else {
        demolitions.push(products[i])
    }
}

// console.log(fireworks, demolitions)




}


Factory.loadProducts(putThingsInDom)
