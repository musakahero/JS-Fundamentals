function cardGame(input){
    let gameObj = {};

    for (const line of input) {
        let [name, cards] = line.split(': ');
        let cardsArr = cards.split(', ');
        if(!gameObj.hasOwnProperty(name)){
            gameObj[name] = {};
        }        
        for (const card of cardsArr) {

            if(!gameObj[name].hasOwnProperty(card)){
                let cardPower = 0;
                let cardType = 0;

                if(card.length<3){
                    [cardPower, cardType] = card.split('');
                } else{
                    cardPower = 10;
                    cardType = card.split('')[card.length-1];
                }
                
            
                let powerValue = Number(cardPower);
                let typeValue = 0;
                if(isNaN(powerValue)){
                    switch(cardPower){
                        case 'J':
                            powerValue = 11;
                            break;
                        case 'Q':
                            powerValue = 12;
                            break;
                        case 'K':
                            powerValue = 13;
                            break;
                        case 'A':
                            powerValue = 14;
                            break;
                    }
                }
                
                switch(cardType){
                    case 'S':
                        typeValue = 4;
                        break;
                    case 'H':
                        typeValue = 3;
                        break;
                    case 'D':
                        typeValue = 2;
                        break;
                    case 'C':
                        typeValue = 1;
                        break;
                }

                let valueOfCard = powerValue*typeValue;

                gameObj[name][card] = valueOfCard;
            }
            
        }
        
    }

    for (const person in gameObj) {
        
        let allValues = Object.values(gameObj[person]);
        let cardTotalValue = 0;
        for (const value of allValues) {
            cardTotalValue+= value;
        }
         
        console.log(`${person}: ${cardTotalValue}`);
    }
}

// cardGame([
//     'Peter: 2C, 4H, 9H, AS, QS',
//     'Tomas: 3H, 10S, JC, KD, 5S, 10S',
//     'Andrea: QH, QC, QS, QD',
//     'Tomas: 6H, 7S, KC, KD, 5S, 10C',
//     'Andrea: QH, QC, JS, JD, JC',
//     'Peter: JD, JD, JD, JD, JD, JD'
//     ]
//     );

cardGame([
    'John: 2C, 4H, 9H, AS, QS',
    'Slav: 3H, 10S, JC, KD, 5S, 10S',
    'Alex: 6H, 7S, KC, KD, 5S, 10C',
    'Thomas: QH, QC, JS, JD, JC',
    'Slav: 6H, 7S, KC, KD, 5S, 10C',
    'Thomas: QH, QC, JS, JD, JC',
    'Alex: 6H, 7S, KC, KD, 5S, 10C',
    'Thomas: QH, QC, JS, JD, JC',
    'John: JD, JD, JD, JD'
    ]
    );
