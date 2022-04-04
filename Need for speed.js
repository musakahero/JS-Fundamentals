function solve(input) {
    let numOfCars = Number(input.shift());
    let garage = {};
    let carCounter = 0;
    
    for (const line of input) {
        if (line != 'Stop') {
            //add new cars to garage
            if (line.includes('|') && carCounter < numOfCars) {
                carCounter++;

                let carPropsArr = line.split('|');
                let car = carPropsArr[0];
                let mileage = Number(carPropsArr[1]);
                let fuel = Number(carPropsArr[2]);

                garage[car] = {};
                garage[car]['mileage'] = mileage;
                garage[car]['fuel'] = fuel;

            } else if (line.includes(':')) {
                let commandProps = line.split(' : ');
                let command = commandProps[0];

                if (command === 'Drive') {
                    let carToUse = commandProps[1];
                    let distanceToCover = Number(commandProps[2]);
                    let fuelNeeded = Number(commandProps[3]);

                    //if enough fuel -> drive
                    if(garage[carToUse].fuel>=fuelNeeded){
                        garage[carToUse].mileage += distanceToCover;
                        garage[carToUse].fuel-=fuelNeeded;
                        console.log(`${carToUse} driven for ${distanceToCover} kilometers. ${fuelNeeded} liters of fuel consumed.`);

                        //delete car if it reaches 100k km
                        if(garage[carToUse].mileage >= 100000){
                            console.log(`Time to sell the ${carToUse}!`);
                            delete garage[carToUse];
                        }
                    } else {
                        console.log('Not enough fuel to make that ride');
                    }

                
                } else if (command === 'Refuel'){
                    let carToUse = commandProps[1];
                    let fuelToFill = Number(commandProps[2]);
                    let freeFuelSpace = 75 - garage[carToUse].fuel;
                    //check if fuelToFill is more than the free tank space
                    if (fuelToFill > freeFuelSpace){
                        garage[carToUse].fuel = 75;
                        console.log(`${carToUse} refueled with ${freeFuelSpace} liters`);
                    } else {
                        garage[carToUse].fuel +=fuelToFill;
                        console.log(`${carToUse} refueled with ${fuelToFill} liters`);
                    }

                } else if(command==='Revert'){
                    let carToUse = commandProps[1];
                    let kilometersToReduce = commandProps[2];

                    garage[carToUse].mileage -= kilometersToReduce;
                    if(garage[carToUse].mileage < 10000){
                        garage[carToUse].mileage = 10000;
                    } else {
                        console.log(`${carToUse} mileage decreased by ${kilometersToReduce} kilometers`);
                    }
                }
            }
        } else {
            break;
        }
    }

    //printing
    for (const carName of Object.keys(garage)) {
        console.log(`${carName} -> Mileage: ${garage[carName].mileage} kms, Fuel in the tank: ${garage[carName].fuel} lt.`);
    }

}



solve([
    '3',
    'Audi A6|38000|62',
    'Mercedes CLS|11000|35',
    'Volkswagen Passat CC|45678|5',
    'Drive : Audi A6 : 543 : 47',
    'Drive : Mercedes CLS : 94 : 11',
    'Drive : Volkswagen Passat CC : 69 : 8',
    'Refuel : Audi A6 : 50',
    'Revert : Mercedes CLS : 500',
    'Revert : Audi A6 : 30000',
    'Stop'
]);
solve([
    '4',
    'Lamborghini Veneno|11111|74',
    'Bugatti Veyron|12345|67',
    'Koenigsegg CCXR|67890|12',
    'Aston Martin Valkryie|99900|50',
    'Drive : Koenigsegg CCXR : 382 : 82',
    'Drive : Aston Martin Valkryie : 99 : 23',
    'Drive : Aston Martin Valkryie : 2 : 1',
    'Refuel : Lamborghini Veneno : 40',
    'Revert : Bugatti Veyron : 2000',
    'Stop'
]
);