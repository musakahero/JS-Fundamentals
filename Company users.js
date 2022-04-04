function companyUsers(input){
    let dict = {};

    for (const line of input) {
        let [companyName, employeeID] = line.split(' -> ');
        
        if(!dict.hasOwnProperty(companyName)){
            dict[companyName] = [];
            dict[companyName].push(employeeID);
        } else {
            if(!dict[companyName].includes(employeeID)){
                dict[companyName].push(employeeID);
            }
        }
    }

    let sorted = Object.entries(dict).sort((a,b) => a[0].localeCompare(b[0]));
    for (const kvp of sorted) { //kvp = [ companyname , [id id id id] ]
        console.log(kvp[0]);
        for (const id of kvp[1]) {
            console.log(`-- ${id}`);
        }
    }

}

// companyUsers([
//     'SoftUni -> AA12345',
//     'SoftUni -> BB12345',
//     'Microsoft -> CC12345',
//     'HP -> BB12345'
//     ]
//     );

companyUsers([
    'SoftUni -> AA12345',
    'SoftUni -> CC12344',
    'Lenovo -> XX23456',
    'SoftUni -> AA12345',
    'Movement -> DD11111'
    ]
    );