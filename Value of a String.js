function solve(input){

    let sumThis = [];
    let splitInput = input[0].split('');
    let command = input[1];

    if(command=='LOWERCASE'){
        for (const char of splitInput) {
            if(isLowerCase(char)){
                sumThis.push(char.charCodeAt(0));
            }
        }
    } else if(command == 'UPPERCASE'){
        for (const char of splitInput) {
            if(isUpperCase(char)){
                sumThis.push(char.charCodeAt(0));
            }
        }
    }

    let sum = 0;
    sumThis.map(x => sum+=x);

    console.log(`The total sum is: ${sum}`);

    function isLowerCase(letter){
        if(letter.charCodeAt(0) >= 97 
        && letter.charCodeAt(0) <= 122){
            return true;
        } else {
            return false;
        }
    }
    function isUpperCase(letter){
        if(letter.charCodeAt(0) >= 65 
        && letter.charCodeAt(0) <= 90){
            return true;
        } else {
            return false;
        }
    }
}

//solve(['HelloFromMyAwesomePROGRAM', 'LOWERCASE']);
solve(['AC/DC', 'UPPERCASE']);

// solve(['HelloFromMyAwesomePROGRAM', 
// 'LOWERCASE'])