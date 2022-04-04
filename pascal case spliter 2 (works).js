function solve(input){
    let result = [];
    for(let i = 0; i < input.length; i++){
        if(input.charCodeAt(i) >= 65 
        && input.charCodeAt(i) <= 90){

            let text = input.substring(i+1);
            let word = '' + input[i];

            for (let j = 0; j < text.length; j++) {
                if(!(text.charCodeAt(j) >= 65 
                && text.charCodeAt(j) <= 90)){
                    word+= text[j];
                } else {
                    break;
                }
            }
            result.push(word);           
        }       
    }
    console.log(result.join(', '));  
}

solve('SplitMeIfYouCanHaHaYouCantOrYouCan');
solve('HoldITheDoor');
solve('ThisIsSoAnnoyingToDo');