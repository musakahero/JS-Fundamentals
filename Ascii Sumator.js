function solve(input){
    let firstCharValue = input[0].charCodeAt(0);
    let secondCharValue = input[1].charCodeAt(0);
    let givenStr = input[2];
    let total = 0;

    for (const char of givenStr) {
        let testCharValue = char.charCodeAt(0);
        if(firstCharValue > secondCharValue){
            if (testCharValue>secondCharValue 
            && testCharValue < firstCharValue){
                total+=testCharValue;
            }
        } else if (firstCharValue < secondCharValue){
            if(testCharValue > firstCharValue 
                && testCharValue < secondCharValue){
                    total+=testCharValue;
                }
        }       
    }
    
    console.log(total);
}

solve(['.',
'@',
'dsg12gr5653feee5']
);

console.log('---------');
solve(['?',
'E',
'@ABCEF']
);
console.log('---------');
solve(['a',
'1',
'jfe392$#@j24ui9ne#@$']
);