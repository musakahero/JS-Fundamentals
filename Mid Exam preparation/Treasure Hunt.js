function treasureHunt(input){
    let items = input[0].split("|");
         

    for(let i = 1; i<input.length; i++){
        let commandString = input[i].split(" ");
        let command = commandString[0];

        if(command!="Yohoho!"){
            switch(command){
                case "Loot":
                for(let j = 1; j < commandString.length; j++){
                    if(items.includes(commandString[j])){
                        continue;
                    } else {
                        items.unshift(commandString[j]);
                    }
                }
                break;
                
                case "Drop":
                    let index = Number(commandString[1]);
                if(index<0 || index>items.length-1){
                    continue;
                } else {
                    let spliced = items.splice(index,1);
                    items.push(spliced[0]);
                }
                break;

                case "Steal": //potential issue if user enters a negative count

                    let count = (Number(commandString[1]));
                    let stolen = items.splice(count*(-1),count);
                    console.log(stolen.join(", "));                    
                    break;
            }

        } else {

            if(items.length==0){
                console.log("Failed treasure hunt.");
            } else {
                let itemsLengthSum = 0;
                for (const item of items) {
                    itemsLengthSum+= item.length;
                }
                let avgTreasureGain = itemsLengthSum/items.length;
                console.log(`Average treasure gain: ${avgTreasureGain.toFixed(2)} pirate credits.`);
            }
        }

    }
}

// treasureHunt(["Gold|Silver|Bronze|Medallion|Cup",
// "Loot Wood Gold Coins",
// "Loot Silver Pistol",
// "Drop 3",
// "Steal 3",
// "Yohoho!"]);

treasureHunt(["Diamonds|Silver|Shotgun|Gold",
"Loot Silver Medals Coal",
"Drop -1",
"Drop 1",
"Steal 6",
"Yohoho!"]);