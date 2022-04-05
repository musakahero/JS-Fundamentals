function solve(input) {
    let numOfPieces = Number(input.shift());
    let pieces = {};

    let counter = 0;
    while(counter<numOfPieces){
        let [pieceName,composer,key] = input.shift().split('|');
        
        if(!pieces.hasOwnProperty(pieceName)){
            pieces[pieceName] = {composer, key};
        }
        
        counter++;
    }

    while(input[0]!='Stop'){
        let tokens = input.shift().split('|');
        let cmd = tokens[0];
        let targetPiece = tokens[1];
        
        if(cmd=='Add'){
            let addComposer = tokens[2];
            let addKey = tokens[3];

            if(!pieces.hasOwnProperty(targetPiece)){
                pieces[targetPiece] = {composer:addComposer, key:addKey};
                console.log(`${targetPiece} by ${addComposer} in ${addKey} added to the collection!`);
            } else {
                console.log(`${targetPiece} is already in the collection!`);
            }

        }else if (cmd == 'Remove'){
            if(pieces.hasOwnProperty(targetPiece)){
               console.log(`Successfully removed ${targetPiece}!`);
               delete pieces[targetPiece]; 
            } else {
                console.log(`Invalid operation! ${targetPiece} does not exist in the collection.`);
            }

        } else if (cmd == 'ChangeKey'){
            let newKey = tokens[2];
            if(pieces.hasOwnProperty(targetPiece)){
                pieces[targetPiece].key = newKey; 
                console.log(`Changed the key of ${targetPiece} to ${newKey}!`);
            } else {
                console.log(`Invalid operation! ${targetPiece} does not exist in the collection.`);
            }
        }
    }

    for (const piece in pieces) {
        console.log(`${piece} -> Composer: ${pieces[piece].composer}, Key: ${pieces[piece].key}`);
    }
}

// solve([
//     '3',
//     'Fur Elise|Beethoven|A Minor',
//     'Moonlight Sonata|Beethoven|C# Minor',
//     'Clair de Lune|Debussy|C# Minor',
//     'Add|Sonata No.2|Chopin|B Minor',
//     'Add|Hungarian Rhapsody No.2|Liszt|C# Minor',
//     'Add|Fur Elise|Beethoven|C# Minor',
//     'Remove|Clair de Lune',
//     'ChangeKey|Moonlight Sonata|C# Major',
//     'Stop'  
//   ]
//   );
solve([
    '4',
    'Eine kleine Nachtmusik|Mozart|G Major',
    'La Campanella|Liszt|G# Minor',
    'The Marriage of Figaro|Mozart|G Major',
    'Hungarian Dance No.5|Brahms|G Minor',
    'Add|Spring|Vivaldi|E Major',
    'Remove|The Marriage of Figaro',
    'Remove|Turkish March',
    'ChangeKey|Spring|C Major',
    'Add|Nocturne|Chopin|C# Minor',
    'Stop'
  ]
  );
