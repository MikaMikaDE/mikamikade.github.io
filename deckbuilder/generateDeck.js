for (let i=1; i<=60; i++){
    document.getElementById('deckList').innerHTML +=
    `<div class = "card"; id = "card-`+i+`">
          <img  id="img-`+i+`;" src="./img/cardBack.jpg"; onclick="chooseCard('`+i+`')">
    </div>`
  ;}