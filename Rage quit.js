function solve(input) {
    let pattern = /(?<stringToRepeat>[^0-9]+)(?<count>[0-9]+)/g;   
    let allMatches = input.match(pattern);
    let result = '';

    for (const match of allMatches) {
        let matchedStrAndNum = pattern.exec(match);
        let stringToRepeat = matchedStrAndNum.groups.stringToRepeat;
        let repeatCount = matchedStrAndNum.groups.count;

        let uppercaseString = stringToRepeat.toUpperCase();
        
        
        for(let i = 0; i < repeatCount; i++){
            result += uppercaseString;
        }
               
    }
    console.log(result);

}

//solve('a3');
solve('aSd2&5s@1');