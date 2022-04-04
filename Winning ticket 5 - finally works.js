function solve(input) {
    let splitRegex = /\s*,\s*/;
    let tokens = input.split(splitRegex).map(x => x.trim()); //make sure no whitespaces are left after splitting
    let winningPattern = /(\@{6,10}|\#{6,10}|\${6,10}|\^{6,10})/; //will check the two halves of the ticket separately
 
    for (const ticket of tokens) {
 
        //ticket validation
        if (ticket.length == 20) {
            let leftHalf = ticket.substring(0, 10);
            let rightHalf = ticket.substring(10);
            
            //check if both halves have a match by the winningPattern
            if(winningPattern.test(leftHalf) && winningPattern.test(rightHalf)){
 
                //is the symbol the same in both halves?
                let leftSymbol = winningPattern.exec(leftHalf)[0][0];
                let rightSymbol = winningPattern.exec(rightHalf)[0][0];
                let leftMatch = winningPattern.exec(leftHalf)[0];
                let rightMatch = winningPattern.exec(rightHalf)[0];
                if(leftSymbol === rightSymbol){
 
                    //jackpot check
                    if(leftMatch.length == 10 && rightMatch.length == 10){
                        console.log(`ticket "${ticket}" - 10${leftSymbol} Jackpot!`);
                    } else {
                        //check which match is shorter and print that one as winning
                        if(leftMatch.length > rightMatch.length){
                            console.log(`ticket "${ticket}" - ${rightMatch.length}${rightSymbol}`);
                        } else {
                            console.log(`ticket "${ticket}" - ${leftMatch.length}${leftSymbol}`);
                        }
                    }
                } else {
                    console.log(`ticket "${ticket}" - no match`);
                }
            } else {
                console.log(`ticket "${ticket}" - no match`);
            }
        } else {
            console.log('invalid ticket');
        }
    }
}

solve('');
console.log('----');
solve('Cash$$$$$$Ca$$$$$$sh');
console.log('----');
solve('$$$$$$$$$$$$$$$$$$$$, aabb  , th@@@@@@eemo@@@@@@ey');
console.log('----');
solve('validticketnomatch:(');
console.log('----');

//custom no match checks
solve('th@@@@@@eemo@@@@@@@@'); //diff num of chars in sides
console.log('----');
solve('th@@@@@@eemo$####@@@'); //diff num of diff chars in sides
console.log('----');
solve('^^^^^^sdsadat$$$$$$$'); //diff sides
console.log('----');
solve('^#$^^^sdsadat$$$$$$$'); //diff chars
console.log('----');


//custom whitespace-in-front-of-string checks (fixed with trim())
solve('    $$$$$$$$$$$$$$$$$$$$') //weird spacing jackpot
console.log('----');
solve('    th@@@@@@eemo@@@@@@ey') //weird spacing normal

//custom jackpot checks
solve('^^^^^^^^^^^^^^^^^^^^'); // ^ jackpot
console.log('----');
solve('####################'); // # jackpot
console.log('----');
solve('@@@@@@@@@@@@@@@@@@@@'); // @ jackpot
console.log('----');

//custom regular win
solve('th######eemo######ey'); //# regular
console.log('----');
solve('th$$$$$$eemo$$$$$$ey'); //$ regular
console.log('----');
solve('th^^^^^^eemo^^^^^^ey'); //^ regular

//custom check
solve('%$$$$$$$$$$$$$$$$$$$');


