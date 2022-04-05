function dictionary(JSONarray){
    let newSortedObj = {};
    let newObj = {};
    for (const json of JSONarray) {
        let parsedObj = JSON.parse(json);
        let key = Object.keys(parsedObj)[0];
        newObj[key] = parsedObj[key];
        
    }

    let sortedKeys = Object.keys(newObj).sort();
    
    for (const key of sortedKeys) {
        newSortedObj[key]=newObj[key];
    }

    let dictKeys = Object.keys(newSortedObj);
    for (const key of dictKeys) {
        console.log(`Term: ${key} => Definition: ${newObj[key]}`);
    }
    
    
}

dictionary([
    '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
    '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
    '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
    '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
    '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}'
    ]
    );

// dictionary([
//     '{"Cup":"A small bowl-shaped container for drinking from, typically having a handle"}',
//     '{"Cake":"An item of soft sweet food made from a mixture of flour, fat, eggs, sugar, and other ingredients, baked and sometimes iced or decorated."} ',
//     '{"Watermelon":"The large fruit of a plant of the gourd family, with smooth green skin, red pulp, and watery juice."} ',
//     '{"Music":"Vocal or instrumental sounds (or both) combined in such a way as to produce beauty of form, harmony, and expression of emotion."} ',
//     '{"Art":"The expression or application of human creative skill and imagination, typically in a visual form such as painting or sculpture, producing works to be appreciated primarily for their beauty or emotional power."} '
//     ]
//     );