function solve(input){
    let letterArray = input[0].split(' ');
    let wordList = input[1];
    let result = [];

    //console.log(letterArray);

    for (const letterWord of letterArray) {

        if (letterWord.includes('_') && letterWord.includes(',')) {          
            let letterWordLength = letterWord.length-1;

            for (const fillWord of wordList) {
                if(letterWordLength == fillWord.length){
                    result.push(fillWord + ',');
                    break;
                }
            }
        
        } else if (letterWord.includes('_') && letterWord.includes('.')) {          
            let letterWordLength = letterWord.length-1;

            for (const fillWord of wordList) {
                if(letterWordLength == fillWord.length){
                    result.push(fillWord + '.');
                    break;
                }
            }
        
        }
        else if (letterWord.includes('_')){
            let letterWordLength = letterWord.length;
            for (const fillWord of wordList) {
                if(letterWordLength == fillWord.length){
                    result.push(fillWord);
                    break;
                }
            }
            

        } else {
            result.push(letterWord);
        }
    }

    console.log(result.join(' '));

}

solve(['Hi, grandma! I\'m so ____ to write to you. ______ the winter vacation, so _______ things happened. My dad bought me a sled. Mom started a new job as a __________. My brother\'s ankle is ________, and now it bothers me even more. Every night Mom cooks ___ on your recipe because it is the most delicious. I hope this year Santa will _____ me a robot.',
['pie', 'bring', 'glad', 'During', 'amazing', 'pharmacist', 'sprained']]);
