function resources(input) {
    let resourceObj = {};
    for(let i = 0; i < input.length; i+=2){
        resourceObj[input[i]] = 0;
    }
    for(let j = 1; j < input.length; j+=2){
        resourceObj[input[j-1]] += Number(input[j]);
    }
    for (const reso in resourceObj) {
        console.log(`${reso} -> ${resourceObj[reso]}`);
    }
}

resources([
    'Gold',
    '155',
    'Silver',
    '10',
    'Copper',
    '17'
    ]
    );

    console.log('-------------');

// resources([
//     'gold',
//     '155',
//     'silver',
//     '10',
//     'copper',
//     '17',
//     'gold',
//     '15'
//     ]
//     );  