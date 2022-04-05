function solve(input) {
    let allStops = input.shift();

    while (input[0] != 'Travel') {
        let tokens = input.shift().split(':');
        let cmd = tokens[0];

        if (cmd == 'Add Stop') {
            let index = tokens[1];
            let strToInsert = tokens[2];

            //check if index is valid
            if (index >= 0 && index <= allStops.length - 1) {
                allStops = allStops.split('');
                allStops.splice(index, 0, strToInsert);
                allStops = allStops.join('');
            }

            console.log(allStops);
        } else if (cmd == 'Remove Stop') {
            let startIndex = tokens[1];
            let endIndex = tokens[2];

            //check if indices are valid
            if (startIndex >= 0 && endIndex >= 0 && startIndex <= allStops.length - 1 && endIndex <= allStops.length - 1) {
                allStops = allStops.split('');
                allStops.splice(startIndex, endIndex - startIndex + 1);
                allStops = allStops.join('');
            }

            console.log(allStops);

        } else if (cmd == 'Switch') {
            let oldString = tokens[1];
            let newString = tokens[2];

            //check if old string is in initial string
            if (allStops.includes(oldString)) {
                let regex = new RegExp(oldString,'g');
                allStops = allStops.replace(regex, newString);
            }

            console.log(allStops);
        }
    }

    console.log(`Ready for world tour! Planned stops: ${allStops}`);
}

solve(['Hawai::Cyprys-Greece',
    'Add Stop:7:Rome',
    'Remove Stop:11:16',
    'Switch:Hawai:Bulgaria',
    'Travel'
]);

console.log('---');
solve(['Hawai::Cyprys-Greece-Hawai-Hawai',
    'Add Stop:7:Rome',
    'Remove Stop:11:16',
    'Switch:Hawai:Bulgaria',
    'Travel'
]);