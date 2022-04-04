function solve(input) {
    let msgToReveal = input[0];

    for (let i = 1; i < input.length; i++) {
        if (input[i] != 'Reveal' && msgToReveal.length != 0) {
            let commandsArr = input[i].split(':|:');

            if (commandsArr[0] == 'InsertSpace') {
                let index = commandsArr[1];

                msgToReveal = msgToReveal.split('');
                msgToReveal.splice(index, 0, ' ');
                msgToReveal = msgToReveal.join('');
                console.log(msgToReveal);


            } else if (commandsArr[0] == 'Reverse') {
                let subToReverse = commandsArr[1];

                if (msgToReveal.includes(subToReverse)) {
                    let reversed = subToReverse.split('').reverse().join('');
                    let indexOfSub = msgToReveal.indexOf(subToReverse);

                    msgToReveal = msgToReveal.split('');
                    msgToReveal.splice(indexOfSub, subToReverse.length);
                    msgToReveal.push(reversed);
                    msgToReveal = msgToReveal.join('');
                    console.log(msgToReveal);
                } else {
                    console.log('error');
                }

            }

            else if (commandsArr[0] == 'ChangeAll') {
                let toReplace = commandsArr[1];
                let replaceWith = commandsArr[2];

                while (msgToReveal.includes(toReplace)) {
                    msgToReveal = msgToReveal.replace(toReplace, replaceWith);
                }
                console.log(msgToReveal);
            }

        } else {
            break;
        }
    }
    console.log(`You have a new text message: ${msgToReveal}`);
}


solve([
    'heVVodar!gniV',
    'ChangeAll:|:V:|:l',
    'Reverse:|:!gnil',
    'InsertSpace:|:5',
    'Reveal'
]);
console.log('--------------');
solve([
    'Hiware?uiy',
    'ChangeAll:|:i:|:o',
    'Reverse:|:?uoy',
    'Reverse:|:jd',
    'InsertSpace:|:3',
    'InsertSpace:|:7',
    'Reveal'
]);
console.log('--------------');
solve([
    '',
    'ChangeAll:|:V:|:l',
    'Reverse:|:!gnil',
    'InsertSpace:|:5',
    'Reveal'
]);
console.log('--------------');
solve([
    'heVVodar!gniV',
    'ChangeAll:|:V:|:l',
    'Reverse:|:!gnil',
    'InsertSpace:|:0',
    'Reveal'
]);