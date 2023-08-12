function searchBar() {
    $.getJSON("./MikaRulings.json", function(data){
        var userInput = document.getElementById("searchBar").value.toLowerCase();
        var filteredData = data.filter(val => val.CardName.toLowerCase() == userInput);
        document.getElementById("cardName").innerHTML   = filteredData[0].CardName;
        document.getElementById("psct").innerHTML       = filteredData[0].PSCT_Edison;
        document.getElementById("rulings").innerHTML    = filteredData[0].Rulings_Edison;
    });
}