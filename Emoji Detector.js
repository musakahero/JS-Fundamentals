function solve(input){
    let text = input[0];
    let emojisRegex = /(::|\*\*)([A-Z][a-z]{2,})\1/gm;
    let emojisCoolness = {};
    let emojis = emojisRegex.exec(text);
    
    while(emojis!=null){
        if(!emojisCoolness.hasOwnProperty(emojis[0])){
            //calculate the emoji coolness
            let coolness = 0;
            let lettersRegex = /[A-Za-z]/g;
            let emoji = emojis[2];
            let emojiLetters = emoji.match(lettersRegex);
            
            emojiLetters.map(x => coolness += x.charCodeAt(0));
            
            //add the emoji and its coolness to the object
            emojisCoolness[emojis[0]] = coolness;
        }

        emojis = emojisRegex.exec(text);
    }

    //calculate cool threshold
    let digitsRegex = /\d/gm;
    let coolThreshold = 1;
    let digitMatches = text.match(digitsRegex);
    digitMatches.map(x => coolThreshold *= x);
    

    //compare and print
    console.log(`Cool threshold: ${coolThreshold}`);
    console.log(`${Object.keys(emojisCoolness).length} emojis found in the text. The cool ones are:`);
    for (const emojiName in emojisCoolness) {
        
        if(emojisCoolness[emojiName] >= coolThreshold){
            console.log(`${emojiName}`);
        }       
    }   
}

solve(["In the Sofia Zoo there are 311 animals in total! ::Smiley:: This includes 3 **Tigers**, 1 ::Elephant:, 12 **Monk3ys**, a **Gorilla::, 5 ::fox:es: and 21 different types of :Snak::Es::. ::Mooning:: **Shy**"]);

console.log('===');
solve(["5, 4, 3, 2, 1, go! The 1-th consecutive banana-eating contest has begun! ::Joy:: **Banana** ::Wink:: **Vali** ::valid_emoji::"]);
console.log('===');
solve(["It is a long established fact that 1 a reader will be distracted by 9 the readable content of a page when looking at its layout. The point of using ::LoremIpsum:: is that it has a more-or-less normal 3 distribution of 8 letters, as opposed to using 'Content here, content 99 here', making it look like readable **English**."]);

console.log('===');
solve([" go! The -th consecutive banana-eating contest has begun! ::Joy:: **Banana** ::Wink:: **Vali** ::valid_emoji::"]);