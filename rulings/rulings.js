function searchBar() {
    $.getJSON("./MikaRulings.json", function(data){
        var data = data;
        var userInput = document.getElementById("searchBar").value.toLowerCase();   
        var filteredData = data.filter(val => val.CardName.toLowerCase() == userInput);
        document.getElementById("resp").innerHTML = "result!"
        
    });
}