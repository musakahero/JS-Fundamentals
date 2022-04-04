function solve(input) {
    let numOfLines = input.shift();
    let plantsObj = {};

    for (let i = 0; i < numOfLines; i++) {
        let tokens = input.shift().split('<->');
        let plant = tokens[0];
        let rarity = Number(tokens[1]);

        if (!plantsObj.hasOwnProperty(plant)) {
            plantsObj[plant] = { rarity, 'rating': [] };
        } else {
            plantsObj[plant].rarity = rarity;
        }

    }

    while (input[0] != 'Exhibition') {
        let tokens = input.shift().split(' ');
        let cmd = tokens[0].split(':')[0];
        let plant = tokens[1];
        if (cmd == 'Rate') {
            let ratingToAdd = Number(tokens[3]);
            if (plantsObj.hasOwnProperty(plant)) {
                plantsObj[plant].rating.push(ratingToAdd);
            } else {
                console.log('error');
            }

        } else if (cmd == 'Update') {
            let newRarity = Number(tokens[3]);

            if (plantsObj.hasOwnProperty(plant)) {
                plantsObj[plant].rarity = newRarity;
            } else {
                console.log('error');
            }

        } else if (cmd == 'Reset') {

            if (plantsObj.hasOwnProperty(plant)) {
                plantsObj[plant].rating = [];
            } else {
                console.log('error');
            }
        }
    }

    //get average rating for each plant
    for (const plant in plantsObj) {
        if(plantsObj[plant].rating.length === 0){
            plantsObj[plant]['avgRating'] = 0.00;
        } else {
            plantsObj[plant]['avgRating'] = plantsObj[plant].rating.reduce((a,b)=> a+b) / plantsObj[plant].rating.length;
        }
        
    }

    //sorting
    let entries = Object.entries(plantsObj); //[plant, {}]
    let sorted = entries.sort((a,b) => a[1].rarity == b[1].rarity ? (b[1].avgRating - a[1].avgRating) : (b[1].rarity - a[1].rarity));

    console.log(`Plants for the exhibition:`);
    
    for (const [plant, obj] of sorted) {
        console.log(`- ${plant}; Rarity: ${obj.rarity}; Rating: ${obj.avgRating.toFixed(2)}`);
    }
}

solve(['3',
    'Arnoldii<->4',
    'Woodii<->7',
    'Welwitschia<->2',
    'Rate: Woodii - 10',
    'Rate: Welwitschia - 7',
    'Rate: Arnoldii - 3',
    'Rate: Woodii - 5',
    'Update: Woodii - 5',
    'Reset: Arnoldii',
    'Exhibition'
])

solve([
    '2',
    'Candelabra<->10',
    'Oahu<->10',
    'Rate: Oahu - 7',
    'Rate: Candelabra - 6',
    'Exhibition'
])