function schedule(inputArr){
    let allFlightsArr = inputArr[0];
    let flightsWithChangesArr = inputArr[1];
    let checkStatus = inputArr[2];
    let allFlightsBeforeChange = {};
 

    //fill outdatedObj with the flights
    for (const flightString of allFlightsArr) {
        let currFlight = flightString.split(' ')[0];
        let destination = flightString.split(`${currFlight} `)[1];
        
        let obj = {'status':'Ready to fly', 'destination':destination, 'wasChanged':false}
        allFlightsBeforeChange[currFlight] = obj;
    }

   

    //fill updatedObj with the flights
    for (const flightString of flightsWithChangesArr) {
        let currFlight = flightString.split(' ')[0];
        let status = flightString.split(' ')[1];

        //update status
        if (allFlightsBeforeChange.hasOwnProperty(currFlight) && allFlightsBeforeChange[currFlight].status != status){
            allFlightsBeforeChange[currFlight].status = status;
            allFlightsBeforeChange[currFlight].wasChanged = true;
        }
          
    }

    if(checkStatus=="Cancelled"){
        for (const flight of Object.keys(allFlightsBeforeChange)) {

            if(allFlightsBeforeChange[flight].status == "Cancelled"){
                console.log(`{ Destination: '${allFlightsBeforeChange[flight].destination}', Status: '${allFlightsBeforeChange[flight].status}' }`);
            }           
        }
    } else {
            for (const flight of Object.keys(allFlightsBeforeChange)) {
            if(allFlightsBeforeChange[flight].status == "Ready to fly"){
                console.log(`{ Destination: '${allFlightsBeforeChange[flight].destination}', Status: '${allFlightsBeforeChange[flight].status}' }`);
            }
        }
    }

}

// schedule([['WN269 Delaware',
// 'FL2269 Oregon',
//  'WN498 Las Vegas',
//  'WN3145 Ohio',
//  'WN612 Alabama',
//  'WN4010 New York',
//  'WN1173 California',
//  'DL2120 Texas',
//  'KL5744 Illinois',
//  'WN678 Pennsylvania'],
//  ['DL2120 Cancelled',
//  'WN612 Cancelled',
//  'WN1173 Cancelled',
//  'SK430 Cancelled'],
//  ['Cancelled']
// ]
// );

schedule([['WN269 Delaware',
'FL2269 Oregon',
 'WN498 Las Vegas',
 'WN3145 Ohio',
 'WN612 Alabama',
 'WN4010 New York',
 'WN1173 California',
 'DL2120 Texas',
 'KL5744 Illinois',
 'WN678 Pennsylvania'],
 ['DL2120 Cancelled',
 'WN612 Cancelled',
 'WN1173 Cancelled',
 'SK330 Cancelled'],
 ['Ready to fly']
]
);