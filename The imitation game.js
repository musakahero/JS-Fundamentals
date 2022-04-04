function solve(input) {
    let msg = input.shift();

    for (const line of input) {
        if (line == 'Decode') {
            break;
        } else {
            let commandProps = line.split('|');
            let cmd = commandProps[0];

            if (cmd === 'Move') {
                let numOfChars = Number(commandProps[1]);
                let subToMove = msg.substring(0,numOfChars);
                msg = msg.split('');
                msg.splice(0,numOfChars);
                msg = msg.join('');       
                msg += subToMove;
                
                
            } else if (cmd === 'Insert') {
                let index = Number(commandProps[1]);
                let value = commandProps[2];

                msg = msg.split('');
                msg.splice(index,0,value);
                msg = msg.join('');

            } else if (cmd === 'ChangeAll'){
                let subToReplace = commandProps[1];
                let replaceWith = commandProps[2];

                if(msg.includes(subToReplace)){
                    while(msg.includes(subToReplace)){
                        msg = msg.replace(subToReplace, replaceWith);
                    }
                }
            }
        }
    }
    console.log(`The decrypted message is: ${msg}`);
}

solve([
    'zzHe',
    'ChangeAll|z|l',
    'Insert|2|o',
    'Move|3',
    'Decode'
]
);
console.log('----');
solve([
    'owyouh',
    'Move|2',
    'Move|3',
    'Insert|3|are',
    'Insert|9|?',
    'Decode'
]
);