function garage(input){
    let garageObj = {};
    let availableCarID = 0;
    let carName = `Car${availableCarID}`;

    for (const line of input) {
        let [number, props] = line.split(' - ');
        let propsArr = props.split(', ');

        if(!garageObj.hasOwnProperty(number)){
            garageObj[number] = {};
        }
        
        garageObj[number][carName] = {};

        for (const element of propsArr) {
            let [propKey, propValue] = element.split(': ')
            garageObj[number][carName][propKey] = propValue;           
        }

        availableCarID++;
        carName = `Car${availableCarID}`;
           
        
    }

    //printing
    for (const garage in garageObj) {
        console.log(`Garage № ${garage}`);
        for (const car in garageObj[garage]) {
            let joinedPropsArr = [];
            for (const prop in garageObj[garage][car]) {
                joinedPropsArr.push(`${prop} - ${garageObj[garage][car][prop]}`);
            }
            console.log('---',joinedPropsArr.join(', ')); 

            
        }
    }
        

    
}

// garage(['1 - color: blue, fuel type: diesel', '1 - color: red, manufacture: Audi', '2 - fuel type: petrol', '4 - color: dark blue, fuel type: diesel, manufacture: Fiat']);

garage(['1 - color: green, fuel type: petrol',
'1 - color: dark red, manufacture: WV',
'2 - fuel type: diesel',
'3 - color: dark blue, fuel type: petrol']
);