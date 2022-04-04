function solve(input) {

    let starPattern = /[star]/gi;
    let numOfMsgs = Number(input[0]);
    let index = 1;
    let attackedPlanets = [];
    let destroyedPlanets = [];
    let pattern = /@(?<planet>[A-Za-z]+)[^@\-!:>]*?:(?<population>\d+)[^@\-!:>]*?!(?<attackType>[A,D])![^@\-!:>]*?->(?<soldierCount>\d+)/

    

    while (index != numOfMsgs + 1) {
        let decrypted = '';
        //count the s t a r letters
        let msgToDecrypt = input[index];
        if (!pattern.test(msgToDecrypt)) {
            let starCount = msgToDecrypt.match(starPattern).length;

            //get decrypted msg
            for (const char of msgToDecrypt) {
                let newCharValue = char.charCodeAt(0) - starCount;
                decrypted += String.fromCharCode(newCharValue);
            }
        } else {
            decrypted = msgToDecrypt.slice(0);
        }


        //check if msg is valid
        if (pattern.test(decrypted)) {
            let planet = pattern.exec(decrypted).groups.planet;

            let attackType = pattern.exec(decrypted).groups.attackType;

            if (attackType == 'A') {
                attackedPlanets.push(planet);
            } else {
                destroyedPlanets.push(planet);
            }
        }
        index++;
    }

    //print
    console.log(`Attacked planets: ${attackedPlanets.length}`);
    if (attackedPlanets.length > 0) {
        let sorted = attackedPlanets.sort((a, b) => a.localeCompare(b));
        for (const planet of sorted) {
            console.log(`-> ${planet}`);
        }
    }
    console.log(`Destroyed planets: ${destroyedPlanets.length}`);
    if (destroyedPlanets.length > 0) {
        let sorted = destroyedPlanets.sort((a, b) => a.localeCompare(b));
        for (const planet of sorted) {
            console.log(`-> ${planet}`);
        }
    }
}

solve(['2',
    'STCDoghudd4=63333$D$0A53333',
    'EHfsytsnhf?8555&I&2C9555SR']
);
solve(['3',
    "tt(''DGsvywgerx>6444444444%H%1B9444",
    'GQhrr|A977777(H(TTTT',
    'EHfsytsnhf?8555&I&2C9555SR']
);
