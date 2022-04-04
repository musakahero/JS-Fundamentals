function solve(input) {
    let participantsArr = input[0].split(', ');
    let letterPattern = /[A-Za-z]/g
    let numericPattern = /[0-9]/g
    let resultObj = {};
    let alreadyReceivedNames = [];

    //read input past 1st line
    for (let i = 1; i < input.length; i++) {
        if (input[i] != 'end of race') {
            //get the name
            let lettersArr = [];
            let letterMatch = letterPattern.exec(input[i]);
            while (letterMatch != null) {
                lettersArr.push(letterMatch[0]);
                letterMatch = letterPattern.exec(input[i]);
            }
            let name = lettersArr.join('');
            //get the distance
            if (participantsArr.includes(name)) {
                let sum = 0;

                let numbersArr = [];
                let numericMatch = numericPattern.exec(input[i]);

                while (numericMatch != null) {
                    numbersArr.push(numericMatch[0]);
                    numericMatch = numericPattern.exec(input[i]);
                }
                numbersArr.map(x => sum += Number(x));

                //check if name already received before
                if (alreadyReceivedNames.includes(name)) {
                    resultObj[name] += sum;
                } else {
                    resultObj[name] = sum;
                    alreadyReceivedNames.push(name);
                }
            }

        } else {
            break;
        }
    }
    //sorting
    let sorted = Object.entries(resultObj);
    sorted.sort((a, b) => b[1] - a[1]);
    
    //printing
    console.log(`1st place: ${sorted[0][0]}`);
    console.log(`2nd place: ${sorted[1][0]}`);
    console.log(`3rd place: ${sorted[2][0]}`);

}

// solve(['George, Peter, Bill, Tom',
//     'G4e@55or%6g6!68e!!@ ',
//     'R1@!3a$y4456@',
//     'B5@i@#123ll',
//     'G@e54o$r6ge#',
//     '7P%et^#e5346r',
//     'T$o553m&6',
//     'end of race']
// );
solve(['Ronald, Bill, Tom, Timmy, Maggie, Michonne',
'Mi*&^%$ch123o!#$%#nne787) ',
'%$$B(*&&)i89ll)*&) ',
'R**(on%^&ald992) ',
'T(*^^%immy77) ',
'Ma10**$#g0g0g0i0e',
'end of race']
);