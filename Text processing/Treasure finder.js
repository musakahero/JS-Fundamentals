function solve(input){
    let key = input[0].split(' ');

    for(let i = 1; i<input.length; i++){
        if(input[i] != 'find'){
            let newChars = [];
            let currStrToArr = input[i].split('');
            let counter = 0;

            for (const char of currStrToArr) {
                let newChar = char.charCodeAt(0) - key[counter];
                newChars.push(String.fromCharCode(newChar));
                if(counter==key.length-1){
                    counter = 0;
                } else {
                    counter++;
                }
            }

            //console.log(newChars.join(''));
            let decryptedMsg = newChars.join('');
            let treasureType = decryptedMsg.split('&')[1];
            //console.log(treasureType);
            let coordinates = decryptedMsg.split('<')[1].split('>')[0];
            console.log(`Found ${treasureType} at ${coordinates}`);

        } else {
            break;
        }
    }
}

solve(['1 2 1 3',
'ikegfp\'jpne)bv=41P83X@',
'ujfufKt)Tkmyft\'duEprsfjqbvfv=53V55XA',
'find']
);
console.log('=========')
solve(['1 4 2 5 3 2 1',
'Ulgwh"jt$ozfj!\'kqqg(!bx"A3U237GC',
'tsojPqsf$(lrne\'$CYfqpshksdvfT$>634O57YC',
'\'stj)>34W68Z@',
'find']
);
