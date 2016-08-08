var Factory = (function (fact) {
    console.log('DOMload running')


fact.destruction = function() {
        $( "#destroyThePlanet" ).click(function() {
          $("#output").append('garbage');
        });

        $( "#familyFun" ).click(function() {
          $("#output").append('familyFun');
        });

}

function aawpeoighwpqeoigh(x, y){


}
return fact


})(Factory || {})
// Factory.prodMatch();
Factory.destruction();

