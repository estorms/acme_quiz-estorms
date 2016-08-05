var Factory = (function () {
var store = {};
    return {

    getStore: function (){
        return store;
    },

    loadProducts: function (){
        Promise.all ([
        $.getJSON('categories.json'),
        $.getJSON('types.json'),
        $.getJSON('products.json')
        ])

        .then(function (catalog) {
        store.categories = catalog[0].categories
        store.types = catalog[1].types
        store.products = catalog[2].products[0]
         })
        }
    }
})()

var acme = Factory.getStore();
console.log(acme)
