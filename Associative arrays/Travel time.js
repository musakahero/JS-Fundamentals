function travelTime(input) {
    let countryObj = {}; 
    for (const line of input) {
        let [countryName, townName, travelCost] = line.split(' > ');
        if(!countryObj.hasOwnProperty(countryName)){
            countryObj[countryName] = {};            
        }
        if(!countryObj[countryName].hasOwnProperty(townName)){
            countryObj[countryName][townName] = Number(travelCost);
        } else {
            if(countryObj[countryName][townName] > Number(travelCost)){
                countryObj[countryName][townName] = Number(travelCost);
            }
        }      
        
    }
    let sortedCountries = Object.entries(countryObj);
    sortedCountries.sort((a,b) => a[0].localeCompare(b[0]));

    for (const [countryName, townObject ] of sortedCountries) {
        let sortedTowns = Object.entries(townObject);
        sortedTowns.sort((a,b)=>a[1]-b[1]);
        let townsDescriptionArr = [];
        for (const town of sortedTowns) {
            
            currTownsDescription = `${town[0]} -> ${town[1]}`;
            townsDescriptionArr.push(currTownsDescription);
            
        }
        let townsDescrJoined = townsDescriptionArr.join(' ');
        console.log(`${countryName} -> ${townsDescrJoined}`);
        
    }
    
}

travelTime([
    "Bulgaria > Sofia > 500",
    "Bulgaria > Sopot > 800",
    "France > Paris > 2000",
    "Albania > Tirana > 1000",
    "Bulgaria > Sofia > 200"
    ]
    );

    console.log('-------');
travelTime([
    'Bulgaria > Sofia > 25000',
    'Bulgaria > Sofia > 25000',
    'Kalimdor > Orgrimar > 25000',
    'Albania > Tirana > 25000',
    'Bulgaria > Varna > 25010',
    'Bulgaria > Lukovit > 10'
    ]
    );