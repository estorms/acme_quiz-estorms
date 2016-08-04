var Factory = (function (){

Promise.all([
  $.getJSON('categories.json').then(function(data) {
    categories = data.categories;
    //console.log(categories);
    categories.forEach(function (item) {
    categories = item
    console.log(categories);
    return categories
    })
}),

  $.getJSON('types.json').then(function(data) {
    types = data.types;
    types.forEach(function(item){
    types = item
    console.log(types)

    return types;
    })
}),

  $.getJSON('products.json').then(function(data) {
    products = data.products;
    products.forEach(function(item){
    products = item
    console.log(products)
    return products;
    })

})
])
})()




