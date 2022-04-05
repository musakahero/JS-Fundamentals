function solve(input){
    let countOfStr = Number(input.shift());
    
    let stringValidRegex = /!([A-Z][a-z]{2,})!:\[([A-Za-z]{8,})\]/;

    for(let i = 0; i < countOfStr; i++){
        let line = input[i];

        if(stringValidRegex.test(line)){
            let match = stringValidRegex.exec(line);
            let cmd = match[1];
            let str = match[2];
            let asciiArr = [];

            for (const char of str) {
            
                asciiArr.push(char.charCodeAt(0));
            }

            console.log(`${cmd}: ${asciiArr.join(' ')}`);
        } else {
            console.log('The message is invalid');
        }
    }
}

solve(["2",
"!Send!:[IvanisHere]",
"*Time@:[Itis5amAlready"]);

console.log('----');
solve(["3",
"go:[outside]",
"!drive!:YourCarToACarWash",
"!Watch!:[LordofTheRings]"]);
console.log('----');
solve(["2",
"!Send!:[Ivan is Here]",
"*Time@:[Itis5amAlready"]);

