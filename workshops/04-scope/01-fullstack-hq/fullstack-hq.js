// Edit the code below
let place = 'Planet Earth';

function fullstackHQ(){
  return middleFunction('United States');

  function middleFunction(place) {
    return innerFunction('New York State');

    function innerFunction(place) {
      place = 'New York City';
      return innermostFunction();

      function innermostFunction() {
        return 'Fullstack HQ is at ' + place + ', ' + place + ', ' + place + ', ' + place;
      }
    }
  }
}
