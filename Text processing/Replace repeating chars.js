function solve(input){
    
    let currChar = input[0];

    let result = '' + currChar;

    for (const char of input) {
        if(char != currChar){
            currChar = char;
            result+= currChar;
        }
    }
console.log(result);

}

solve('aaaaabbbbbcdddeeeedssaa');
solve('qqqwerqwecccwd');