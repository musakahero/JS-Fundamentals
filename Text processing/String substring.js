function solve(word, text){
    let caseInsText = text.toLowerCase();
    let textArr = caseInsText.split(' ');
    
    if(textArr.includes(word.toLowerCase())){
        console.log(word.toLowerCase());
    } else {
        console.log(`${word.toLowerCase()} not found!`);
    }
    //console.log(caseInsText);
}

solve('javascript',
'JavaScript is the best programming language'
);
solve('python',
'JavaScript is the best programming language'
);