function solve(words, templates){
    //find the word with asterisk

    splitTempArr = templates.split(' ');
    splitWordsArr = words.split(', ');

    for (const tempWord of splitTempArr) {
        if(tempWord.includes('*')){
            let censoredLength = tempWord.length;
            let indexOfTempWord = splitTempArr.indexOf(tempWord);

            for (const word of splitWordsArr) {
                if(censoredLength == word.length){
                    splitTempArr.splice(indexOfTempWord, 1, word);
                    break;
                }
            }
        }
    }

    console.log(splitTempArr.join(' '));
}

solve('great',
'softuni is ***** place for learning new programming languages');
solve('great, learning',
'softuni is ***** place for ******** new programming languages');