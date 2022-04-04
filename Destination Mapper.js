function solve(input) {
    let regex = /(=|\/)([A-Z][A-Za-z]{2,})\1/g;
    let destinations = [];
    let match = regex.exec(input);
    let travelPoints = 0;

    while (match != null) {
        destinations.push(match[2]);
        travelPoints += match[2].length;
        match = regex.exec(input);
    }
    

    destinations = destinations.join(', ');
    console.log(`Destinations: ${destinations}`);
    console.log(`Travel Points: ${travelPoints}`);  
}

solve('=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i=');
solve('ThisIs some InvalidInput');