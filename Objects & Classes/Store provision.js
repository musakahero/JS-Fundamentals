function storeProv(arr1,arr2){
    let stock = {};

    for (let i = 0; i<arr1.length; i+=2){
        stock[arr1[i]] = Number(arr1[i+1]);
    }

    for (let j = 0; j<arr2.length; j+=2){
        if (arr1.includes(arr2[j])){
            stock[arr2[j]] += Number(arr2[j+1]);
        } else {
            stock[arr2[j]] = Number(arr2[j+1]);
        }
    }


    for (const prop of Object.keys(stock)) {
        console.log(`${prop} -> ${stock[prop]}`);
    }
}

storeProv([
    'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
    ],
    [
    'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
    ]
    );

storeProv([
    'Salt', '2', 'Fanta', '4', 'Apple', '14', 'Water', '4', 'Juice', '5'
    ],
    [
    'Sugar', '44', 'Oil', '12', 'Apple', '7', 'Tomatoes', '7', 'Bananas', '30'
    ]
    );