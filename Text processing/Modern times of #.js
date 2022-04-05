function solve(input){
    let text = input.split(' ');
    let resultArr = [];

    for (const word of text) {
        if(word.startsWith('#') && word.length > 1){
            let isValid = true;
            for (let i = 0; i < word.length; i++) {
                if(
                    !(
                    (word.charCodeAt(i) > 64 && word.charCodeAt(i) < 91) 
                || (word.charCodeAt(i) > 96 && word.charCodeAt(i) < 123)
                || (i == 0 && word[i] == '#')
                )
                ){ 
                    isValid = false;
                    break;                   
                }            
            }

            if(isValid) {
                resultArr.push(word);
            }
        }
    }
    for (const word of resultArr) {
        let newWord = word.split('');
        newWord.shift();
        console.log(newWord.join(''));
    }
}

solve('Nowadays everyone uses # to tag a #special word in #socialMedia');

solve('The symbol # is known #variously in English-speaking #regions as the #number sign');