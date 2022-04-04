function solve(input) {
    let text = input.shift();

    for (const line of input) {
        if (line === 'Done') {
            break;
        } else {
            let commandProps = line.split(' ');
            let cmd = commandProps[0];

            if (cmd === 'TakeOdd') {
                let result = '';
                for(let i = 1; i<text.length; i+=2){
                    result += text[i];
                }
                text = result;
                console.log(text);

            } else if (cmd === 'Cut') {
                let index = Number(commandProps[1]);
                let length = Number(commandProps[2]);

                let subToRemove = text.substring(index,index+length);
                let result = text.replace(subToRemove,'');
                text = result;
                console.log(text);

            } else if (cmd === 'Substitute') {
                let subToReplace = commandProps[1];
                let subToReplaceWith = commandProps[2];

                if(text.includes(subToReplace)){
                    while(text.includes(subToReplace)){
                        text = text.replace(subToReplace,subToReplaceWith);
                    }
                    console.log(text);
                } else {
                    console.log('Nothing to replace!');
                }
            }
        }
    }

    console.log(`Your password is: ${text}`);
}

solve((["Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr",
    "TakeOdd",
    "Cut 15 3",
    "Substitute :: -",
    "Substitute | ^",
    "Done"])
);
solve((["up8rgoyg3r1atmlmpiunagt!-irs7!1fgulnnnqy",
    "TakeOdd",
    "Cut 18 2",
    "Substitute ! ***",
    "Substitute ? .!.",
    "Done"])
);
