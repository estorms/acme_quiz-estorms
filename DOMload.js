var Factory = (function (fact) {
    console.log('DOMload running')

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

Factory.destruction();


