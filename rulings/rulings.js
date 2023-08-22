document.getElementById('searchBar').addEventListener('keyup', function (event) {
  search();
});

function getURLQueryParameter() {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get('card');

}

function search(format) {
  const query = document.getElementById('searchBar').value.trim() || getURLQueryParameter();
  if (query !== '') {

    //parse
    $.getJSON('./MikaRulings.json', function (data) {
      var userInput = query.toLowerCase();

      //fuzzy search
      var fuse = new Fuse(data, {
        keys: ['CardName'],
        threshold: 0.1,
      });
      var filteredData = fuse.search(userInput);


      //apply format modifier - that's this functions's variable
      let PSCT = "PSCT_" + format;
      let Rulings = "Rulings_" + format;

      if (filteredData.length > 0) {
        document.getElementById('cardName').innerHTML = filteredData[0].CardName;
        document.getElementById('psct').innerHTML     = filteredData[0][PSCT];    //call from psct variable, see above
        document.getElementById('rulings').innerHTML  = filteredData[0][Rulings]; //call from rule variable, see above
        document.getElementById('stats').innerHTML    = filteredData[0].CardType + ' / ' + filteredData[0].Attribute      + '<br/>' +
                                                        'ATK ' + filteredData[0].Atk + ' / DEF ' +   filteredData[0].Def  + '<br/>' +
                                                        'Level: ' + filteredData[0].Level;
        document.getElementById('cardImage').src      = "../allCards/"+filteredData[0].CardName+".jpg"
      } else {
        document.getElementById('cardName').innerHTML = 'No results found for '+ userInput;
        document.getElementById('psct').innerHTML = '';
        document.getElementById('rulings').innerHTML = '';
        document.getElementById('stats').innerHTML = '';
      }
    });
  }
}

//on page load, if there's stuff in the url, perform a search straight away.
window.addEventListener('DOMContentLoaded', function () {
  search();
});