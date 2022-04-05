function solve(input){
    let string1 = input[0];
    let string2 = input[1];
    let string3 = input[2].split('');

    let stringsToArray = (string1 + string2).split('');
    let counter = 0;
    for (let i = 0; i< stringsToArray.length; i++) {
        if(isVowel(stringsToArray[i])){
            
            stringsToArray.splice(i, 1, string3[counter].toUpperCase());

            if(counter==string3.length-1){
                counter=0;
            } else {
                counter++;
            }
            
        }
    }
    //console.log(stringsToArray);

    console.log(`Your generated password is ${stringsToArray.reverse().join('')}`);

    function isVowel(x){

        let result;
        if(x == "a" || x == "e" || x == "i" || x == "o" || x == "u" ) {
            result = true;
        }
        else{
            result = false;
        }
        return result;
    }
}

solve([
    'ilovepizza', 'ihatevegetables',
    'orange'
    ]
    );
console.log('------------------');
solve([
    'easymoneyeazylife', 'atleasttencharacters', 'absolute'
    ]
    );
console.log('------------------');
solve([
    'areyousureaboutthisone', 'notquitebutitrustyou', 'disturbed'
    ]
    );