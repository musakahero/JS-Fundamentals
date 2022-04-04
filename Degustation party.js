function solve(input){

    let allGuests = {};
    let unliked = 0;

    while(input!='Stop'){
        let [cmd, guest, meal] = input.shift().split('-');

        if(cmd==='Like'){
            if(!allGuests.hasOwnProperty(guest)){
                allGuests[guest] = {};
                allGuests[guest]['liked'] = [];
            }
            if(!allGuests[guest].liked.includes(meal)){
                allGuests[guest]['liked'].push(meal);
            }


        } else if (cmd==='Dislike'){
            if(!allGuests.hasOwnProperty(guest)){
                console.log(`${guest} is not at the party.`);
            } else {
                if(!allGuests[guest]['liked'].includes(meal)){
                    console.log(`${guest} doesn't have the ${meal} in his/her collection.`);
                } else {
                    let indexToRemove = allGuests[guest]['liked'].indexOf(meal);
                    allGuests[guest]['liked'].splice(indexToRemove,1);
                    console.log(`${guest} doesn't like the ${meal}.`);
                    unliked++;
                }
            }
        }
    }

    for (const guest in allGuests) {
        let likedMealsStr = allGuests[guest].liked.join(', ');

        console.log(`${guest}: ${likedMealsStr}`);
    }
    console.log(`Unliked meals: ${unliked}`);
}

solve(["Like-Krisi-shrimps",
"Like-Krisi-soup",
"Like-Penelope-dessert",
"Like-Misho-salad",
"Stop"]);

console.log('---');
solve(["Like-Krisi-shrimps",
"Dislike-Vili-carp",
"Dislike-Krisi-salad",
"Stop"]);
console.log('---');
solve(["Like-Katy-fish",
"Dislike-Katy-fish",
"Stop"]);
