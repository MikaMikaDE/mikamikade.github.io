document.getElementById('searchBar').addEventListener('keydown', function (event) {
  search();
});

function getURLQueryParameter() {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get('card');

}

function search(format) {
  const query = document.getElementById('searchBar').value.trim() || getURLQueryParameter();

  if (query !== '') {

    //parse json
    $.getJSON('./MikaRulings.json', function (data) {
      var userInput = query.toLowerCase();
      var filteredData = data.filter(val => val.CardName.toLowerCase() === userInput);

      if (filteredData.length > 0) {
        document.getElementById('cardName').innerHTML = filteredData[0].CardName;
        document.getElementById('psct').innerHTML     = filteredData[0].PSCT_Edison;
        document.getElementById('rulings').innerHTML  = filteredData[0].Rulings_Edison;
        document.getElementById('stats').innerHTML    = filteredData[0].CardType + ' / ' + filteredData[0].Attribute      + '<br/>' +
                                                        'ATK ' + filteredData[0].Atk + ' / DEF ' +   filteredData[0].Def  + '<br/>' +
                                                        'Level: ' + filteredData[0].Level;
      } else {
        document.getElementById('cardName').innerHTML = 'No results found for '+ userInput;
        document.getElementById('psct').innerHTML = '';
        document.getElementById('rulings').innerHTML = '';
        document.getElementById('stats').innerHTML = '';
      }
    });
  }
}

window.addEventListener('DOMContentLoaded', function () {
  search();
});