function wordsTracker(input){
    let result = {};
    let wordsToFind = input.shift().split(' ');
    let allWords = input;

    for (const word of wordsToFind) {
        result[word] = 0;
        for (const trackWord of allWords) {
            if(word === trackWord){
                result[word]++;
            }
        }
    }
    
    let entries = Object.entries(result);
    entries.sort((a,b)=>b[1]-a[1]);
    for (const kvp of entries) {
        console.log(`${kvp[0]} - ${kvp[1]}`);
    }

}

wordsTracker([
    'this sentence', 
    'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurances', 'of', 'the', 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'
    ]
    );

wordsTracker([
    'is the', 
    'first', 'sentence', 'Here', 'is', 'another', 'the', 'And', 'finally', 'the', 'the', 'sentence']
    );