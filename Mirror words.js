function solve(input) {
    let text = input[0];
    let mirrorPairs = {};

    let currWord = '';
    let testWord = '';
    let regex = /(@|#)(?<word1>[A-Za-z]{3,})\1\1(?<word2>[A-Za-z]{3,})\1/g;
    let matches = regex.exec(text);
    let matchCounter = 0;

    while (matches != null) {
        matchCounter++;
        let leftWord = matches.groups.word1;
        let rightWord = matches.groups.word2;

        let reversed = leftWord.split('').reverse().join('');


        if (reversed === rightWord) {
            //mirrorPairs.push(leftWord);
            mirrorPairs[leftWord] = rightWord;
        }


        matches = regex.exec(text);
    }

    //printing
    if (matchCounter > 0) {
        console.log(`${matchCounter} word pairs found!`);
    } else {
        console.log('No word pairs found!');
    }

    let stringResult = [];

    if (Object.keys(mirrorPairs).length > 0) {
        console.log('The mirror words are:');
        for (const pairKey of Object.keys(mirrorPairs)) {
            stringResult.push(`${pairKey} <=> ${mirrorPairs[pairKey]}`);
        }
        let result = stringResult.join(', ');
        console.log(result);
    } else {
        console.log('No mirror words!');
    }
};

solve([
    '@mix#tix3dj#poOl##loOp#wl@@bong&song%4very$long@thong#Part##traP##@@leveL@@Level@##car#rac##tu@pack@@ckap@#rr#sAw##wAs#r#@w1r'
]
);
solve(['#po0l##l0op# @bAc##cAB@ @LM@ML@ #xxxXxx##xxxXxx# @aba@@ababa@']);
solve(['#lol#lol# @#God@@doG@# #abC@@Cba# @Xyu@#uyX#']);