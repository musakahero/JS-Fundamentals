function solve(input){
    
    let finalNums = [];

    let tokens = input.split(' ').map(x => x.trim()).filter(x=>x!='');
    
    for(let i = 0; i < tokens.length; i++){

        let firstLetter = tokens[i][0];
        let lastLetter = tokens[i][tokens[i].length-1];
        let number = Number(tokens[i].substring(1, tokens[i].length-1));

        if(isLowerCase(firstLetter) == false){
            number /=whichLetter(firstLetter);
        } else {
            number*=whichLetter(firstLetter);
        }

        if(isLowerCase(lastLetter) == false){
            number-=whichLetter(lastLetter);
        } else {
            number+=whichLetter(lastLetter);
        }

        finalNums.push(number);
    }

    let sum = 0;
    finalNums.map(x => sum+=x);

    console.log(sum.toFixed(2));

    function isLowerCase(letter){
        if(letter.charCodeAt(0) >= 65 
        && letter.charCodeAt(0) <= 90){
            return false;
        } else {
            return true;
        }
    }

    function whichLetter(letter){
        //-96
        let num = letter.toUpperCase().charCodeAt(0) - 64;
        return num;
    }
}

//solve('A12b s17G');
//solve('P34562Z q2576f   H456z');
solve('a1A');