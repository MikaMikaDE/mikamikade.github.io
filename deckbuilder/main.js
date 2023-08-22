var deckArray = [];
var selectedCard_ID_HTML = null;
var replacement_ID_HTML  = null;
var NewCard = null;





function chooseCard(ID){
    selectedCard_ID_HTML = ID;
    console.log("ID:" + selectedCard_ID_HTML);
    document.getElementById('previewCard-Image').src = "../Allcards/"+ID
}


function searchCard(){
    
    const targetName = document.getElementById("textInput").value;

    fetch('./data/Cards_Edison.json')
    .then(response => response.json())
    .then(jsonData => {
        let cardType = null;
        for (let i = 0; i < jsonData.length; i++) {
        if (jsonData[i].Name === targetName) {
            cardType = jsonData[i].CardType;
            break;
        }
        }

        // Output the result (if found)
        if (cardType) {
            console.log(`Card found: ${targetName}, ${cardType}`);
            document.getElementById('previewCard-Image').src = "../Allcards/"+`${targetName}`;
        } else {
            console.log('Item not found in JSON data.');
        }
    })
    .catch(error => console.error('Error fetching JSON data:', error));
}
