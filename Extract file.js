function solve(input){
    let lastBackslashIndex = 0;

    for(let i = input.length-1; i >= 0; i--){
        if(input[i] == '\\'){
            lastBackslashIndex = i;
            break;
        }
    }
   
    let lastDotIndex = 0;
    for(let i = input.length-1; i >= 0; i--){
        if(input[i] == '.'){
            lastDotIndex = i;
            break;
        }
    }

    let fileExtension = input.slice(lastDotIndex+1);

    let fileName = input.slice(lastBackslashIndex+1, lastDotIndex);
    

    console.log(`File name: ${fileName}\nFile extension: ${fileExtension}`);
}

solve('C:\\Internal\\training-internal\\Template.pptx');
solve('C:\\Projects\\Data-Structures\\LinkedList.cs');