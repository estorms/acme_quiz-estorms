var Factory = (function (fact) {    //define global variable (Factory), pass in argument of 'fact' to act as object upon which to build methods within the global object ('fact is internal', Factory is global)
var store = {}; //declare empty object to hold JSON data

    fact.loadProducts = function (){ // load products with $getJSON & Promises, define product load as a  method on internal object
        Promise.all ([
        $.getJSON('categories.json'),
        $.getJSON('types.json'),
        $.getJSON('products.json')
        ])

    .then(function (catalog) {
    store.categories = catalog[0].categories
        store.types = catalog[1].types
        store.products = catalog[2].products[0]
    }) //retrieve product data, define as store object key/value pairs
}

  fact.getCategories = function (){
        return store.categories //allow method of object retrieval via global variable
    }

    fact.getTypes = function () { //allow method of object retrieval via global variable

        return store.types
    }

  fact.getProducts = function () {
        return store.products //allow method of object retrieval via global variable
    }


    return fact //return local object built within global variable

})(Factory || {}) // had to add empty object as alternative load




