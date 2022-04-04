function solve(input) {
    let tokens = input[0].split('|');
    //console.log(tokens);
    let firstPart = tokens[0]; //capital letters
    let secondPart = tokens[1]; //pairs - letter and wordLength
    let thirdPart = tokens[2].split(' '); //word list

    let capitalLetters = /([\#|\$|\^|\*|\&])([A-Z]+)\1/.exec(firstPart)[2].split('');
    //console.log(capitalLetters);

    let regex = /\d{2}\:\d{2}/g;
    let asciiCodeAndWordLength = secondPart.match(regex);

    //for every pair XY:ZA
    for (const pair of asciiCodeAndWordLength) {
        let firstLetter = String.fromCharCode(pair.split(':')[0]);
        let wordLength = Number(pair.split(':')[1]);

        //check if letter is actually on the list of letters from firstPart
        if (capitalLetters[0] == firstLetter) {
            capitalLetters.shift();
            let newPattern = new RegExp(`^\\b${firstLetter}[^ ]{${wordLength}}\\b$`, 'g');

            //match & print
            for (const word of thirdPart) {
                let result = word.match(newPattern);
                if (result != null) {
                    console.log(result[0]);
                }
            }
        }
    }
}

solve(['sdsGGasAOTPWEEEdas$AOTP$|a65:1.2s65:03d79:01ds84:02! -80:07++ABs90:1.1|adsaArmyd Gara So La Arm Armyw21 Argo O daOfa Or Ti Sar saTheww The Parahaos']);

solve(['Urgent"Message.TO$#POAML#|readData79:05:79:0!2reme80:03--23:11{79:05}tak{65:11ar}!77:!23--)77:05ACCSS76:05ad|Remedy Por Ostream :Istream Post sOffices Office Of Ankh-Morpork MR.LIPWIG Mister Lipwig']);
