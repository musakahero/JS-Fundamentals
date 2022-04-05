function piccolo(input){
    let regArray = [];
    for (const line of input) {
        let [command, regNumber] = line.split(', ');
        if(command=="IN" && !regArray.includes(regNumber)){
            regArray.push(regNumber);
        } else if (command=='OUT' && regArray.includes(regNumber)) {
            let indexToRemove = regArray.indexOf(regNumber);
            regArray.splice(indexToRemove, 1);
        }
    }

    if(regArray.length > 0){
        let sorted = regArray.sort((a,b)=>a.localeCompare(b));
       
        for (const reg of sorted) {
            console.log(reg);
        }
    } else {
        console.log("Parking Lot is Empty");
    }
    
}

piccolo(['IN, CA2844AA',
'IN, CA1234TA',
'OUT, CA2844AA',
'IN, CA9999TT',
'IN, CA2866HI',
'OUT, CA1234TA',
'IN, CA2844AA',
'OUT, CA2866HI',
'IN, CA9876HH',
'IN, CA2822UU']
);

console.log('---')

piccolo(['IN, CA2844AA',
'IN, CA1234TA',
'OUT, CA2844AA',
'OUT, CA1234TA']
);