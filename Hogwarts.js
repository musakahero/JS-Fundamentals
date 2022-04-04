function solve(input) {
    let spellToDecipher = input.shift();

    while (input[0] != 'Abracadabra') {
        let tokens = input.shift().split(' ');
        let cmd = tokens[0];

        if (cmd === 'Abjuration') {
            spellToDecipher = spellToDecipher.toUpperCase();
            console.log(spellToDecipher);

        } else if (cmd === 'Necromancy') {
            spellToDecipher = spellToDecipher.toLowerCase();
            console.log(spellToDecipher);

        } else if (cmd === 'Illusion') {
            let startIndex = Number(tokens[1]);
            let replaceWith = tokens[2];

            if (startIndex >= 0 && startIndex < spellToDecipher.length) {
                spellToDecipher = spellToDecipher.split('');
                spellToDecipher.splice(startIndex, 1, replaceWith);
                spellToDecipher = spellToDecipher.join('');
                console.log('Done!');
            } else {
                console.log('The spell was too weak.');
            }

        } else if (cmd === 'Divination') {
            let firstSub = tokens[1];
            let secondSub = tokens[2];

            if (spellToDecipher.includes(firstSub)) {
                let regex = new RegExp(firstSub, 'g');
                spellToDecipher = spellToDecipher.replace(regex, secondSub);
                console.log(spellToDecipher);
            }

        } else if (cmd === 'Alteration') {
            let substr = tokens[1];

            if (spellToDecipher.includes(substr)) {
                spellToDecipher = spellToDecipher.split(substr).join('');
                console.log(spellToDecipher);
            }

        } else {
            console.log('The spell did not work!');
        }
    }
}

solve(["A7ci0",
    "Illusion 1 c",
    "Illusion 4 o",
    "Abjuration",
    "Abracadabra"]);
console.log('----');
solve(["TR1GG3R",
    "Necromancy",
    "Illusion 8 m",
    "Illusion 9 n",
    "Abracadabra"])
    ;
console.log('----');
solve(["SwordMaster",
    "Target Target Target",
    "Abjuration",
    "Necromancy",
    "Alteration master",
    "Abracadabra"])
    ;
console.log('----'); //check divination
solve(['trashtrashtrash',
    "Divination tra cra",
    "Abracadabra"]
)
console.log('----'); //check alteration
solve(['trashtrashtrash',
    "Alteration tra",
    "Abracadabra"]
)
console.log('----'); //no commands input
solve(['trashtrashtrash',
    "Abracadabra"]
)
console.log('----');
solve(['trashtrashtrash',

"Abracadabra"]
)

