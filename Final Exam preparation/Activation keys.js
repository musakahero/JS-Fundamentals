function solve(input) {
    let rawKey = input.shift();

    while (input[0] != 'Generate') {
        let tokens = input.shift().split('>>>');
        let cmd = tokens[0];

        if (cmd == 'Contains') {
            let substr = tokens[1];
            if (rawKey.includes(substr)) {
                console.log(`${rawKey} contains ${substr}`);
            } else {
                console.log('Substring not found!');
            }
        } else if (cmd == 'Flip') {
            let caseType = tokens[1];
            let startIndex = Number(tokens[2]);
            let endIndex = Number(tokens[3]);

            if (caseType == 'Upper') {
                let substringToChange = rawKey.substring(startIndex, endIndex);
                substringToChange = substringToChange.toUpperCase();

                rawKey = rawKey.split('');
                rawKey.splice(startIndex, (endIndex-startIndex),substringToChange);
                rawKey = rawKey.join('');
            } else if (caseType == 'Lower'){
                let substringToChange = rawKey.substring(startIndex, endIndex);
                substringToChange = substringToChange.toLowerCase();

                rawKey = rawKey.split('');
                rawKey.splice(startIndex, (endIndex-startIndex),substringToChange);
                rawKey = rawKey.join(''); 
            }

            console.log(rawKey);
        } else if (cmd == 'Slice'){
            let startIndex = Number(tokens[1]);
            let endIndex = Number(tokens[2]);
            rawKey = rawKey.split('');
            rawKey.splice(startIndex, endIndex-startIndex);
            rawKey = rawKey.join('');
            console.log(rawKey);
        }
    }

    console.log(`Your activation key is: ${rawKey}`);


    function isLowerCase(letter) {
        if (letter.charCodeAt(0) >= 97
            && letter.charCodeAt(0) <= 122) {
            return true;
        } else {
            return false;
        }
    }

    function isUpperCase(letter) {
        if (letter.charCodeAt(0) >= 65
            && letter.charCodeAt(0) <= 90) {
            return true;
        } else {
            return false;
        }
    }

}

solve(["abcdefghijklmnopqrstuvwxyz",
    "Slice>>>2>>>6",
    "Flip>>>Upper>>>3>>>14",
    "Flip>>>Lower>>>5>>>7",
    "Contains>>>def",
    "Contains>>>deF",
    "Generate"]);

console.log('===');
solve(["134softsf5ftuni2020rockz42",
    "Slice>>>3>>>7",
    "Contains>>>-rock",
    "Contains>>>-uni-",
    "Contains>>>-rocks",
    "Flip>>>Upper>>>2>>>8",
    "Flip>>>Lower>>>5>>>11",
    "Generate"]);
