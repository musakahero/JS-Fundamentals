function numbers(input){
    //input to array of numbers
    let nums = input.split(" ").map(Number);
   
    let numTotal = 0;
    for(let i = 0; i< nums.length; i++){
        numTotal+=nums[i];
    }
    
    let avgNum = numTotal/nums.length;

    let biggerNumbers = nums.filter(x => x > avgNum);

    if(biggerNumbers.length == 0){
        console.log(`No`);
    } else {
        let result = biggerNumbers.sort((a,b)=> b - a);
        while (result.length>5){
            result.pop();
        }
        console.log(result.join(" "));
    }
    





    //printing
    
}

numbers('-1 -2 -3 -4 -5 -6');