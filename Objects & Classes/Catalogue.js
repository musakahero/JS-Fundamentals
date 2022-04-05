function cat(inputArr){
    let unsortedObj = {};
    let sortedObj = {};
    let catalogueObj = {};

    for (const line of inputArr) {
        let product = line.split(' : ')[0];
        let price = Number(line.split(' : ')[1]);
        unsortedObj[product] = price;
    }

    let sortedKeys = Object.keys(unsortedObj).sort((a,b)=>a.localeCompare(b));
    
    for (const key of sortedKeys) {
        sortedObj[key] = unsortedObj[key];
    }

    for(let i = 0; i<sortedKeys.length; i++){
        let initial = sortedKeys[i][0];
        let kvps = Object.entries(sortedObj);
        if(catalogueObj.hasOwnProperty(initial)){
            
            catalogueObj[initial].push(kvps[i]);
        } else {
            catalogueObj[initial] = [kvps[i]];
        }
    }
    for (const letter of Object.keys(catalogueObj)) {
        console.log(`${letter}`);

        for (const kvp of catalogueObj[letter]) {
            console.log(`  ${kvp[0]}: ${kvp[1]}`);
        }
    }
    
    
 
    
}

cat([
    'Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10'
    ]
    );

// cat([
//     'Omlet : 5.4',
//     'Shirt : 15',
//     'Cake : 59'
//     ]
//     );