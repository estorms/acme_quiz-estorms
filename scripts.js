// var categories = null; // global var for categories array ==> necessary to capture return values

// var types = null; // global var for types array

// var products = null; // global var for products array

// var catObjs = null; // global var for each object (category) in categories array

// var typesObjs = null; // global var for each object (type) in types array

// var prodsObjs = null; // global var for each object (product) in products array

var hitMeJack = (function () {
Promise.all([
  $.getJSON('categories.json').then(function(data) {
    categories = data.categories;
    //console.log(categories);
    return categories;
    }),

  $.getJSON('types.json').then(function(data) {
    types = data.types;
    //console.log(types);
    return types;
    }),

  $.getJSON('products.json').then(function(data){ //direct reference to response object received
    products = data.products;
    //console.log(products);
    return products;
    })
])

.then(function(combinedDataArray) {


    categories.forEach(function (item) {
        catObjs = item
        //console.log(catObjs);
        return catObjs
    }),

    types.forEach(function(item) {
        typesObjs = item
       // console.log(typesObjs);
        return typesObjs
    }),

    products.forEach(function(item) {
        prodsObjs = item
       // console.log(prodsObjs);
       return prodsObjs
    })


});
return {
    categories,
    types,
    products,
    catObjs,
    typeObjs,
    prodsObjs
}

}();
//console.log(categories);
//hitMeJack();
//console.log(categories);
















