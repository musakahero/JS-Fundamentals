function experience(input){
    let mappedArr = input.map(Number);

    let XPneeded = mappedArr[0];
    let countOfBattles = mappedArr[1];
    let battleCounter = 0;
    let currXP = 0;

    for(let i = 0; i < countOfBattles; i++){

        battleCounter++;
        let thisBattleXP = mappedArr[i+2];
        let modifiedXP = 0;

        if(battleCounter%15==0){
            modifiedXP = thisBattleXP + (thisBattleXP * 0.05);     
            currXP += modifiedXP;      
        } else if (battleCounter%5==0){
            modifiedXP = thisBattleXP - (thisBattleXP*0.10);
            currXP+=modifiedXP;
        } else if (battleCounter%3==0){
            modifiedXP = thisBattleXP + (thisBattleXP*0.15);
            currXP+=modifiedXP;
        } else {
            currXP+=thisBattleXP;
        }

        if(currXP >= XPneeded){
            break;
        }

    }

    let neededXP = XPneeded-currXP;
    if(currXP>=XPneeded){
        console.log(`Player successfully collected his needed experience for ${battleCounter} battles.`);
    } else {
        console.log(`Player was not able to collect the needed experience, ${neededXP.toFixed(2)} more needed.`);
    }
    

}

// experience([500,
//     5,
//     50,
//     100,
//     200,
//     100,
//     30]);
    
// experience([500,
//     5,
//     50,
//     100,
//     200,
//     100,
//     20]);    

// experience([400,
//     5,
//     50,
//     100,
//     200,
//     100,
//     20]);      