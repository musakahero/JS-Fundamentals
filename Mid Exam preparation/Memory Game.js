function memoryGame(input){
    let nums = input[0].split(" ");
    let numberOfMoves = 0;

    //iterate through input array
    for(let i=1; i<input.length; i++){


        if(input[i]!="end"){
            let indexes = input[i].split(" ");
            let index1 = indexes[0];
            let index2 = indexes[1];
            
            //cheat protection
            if(index1 == index2 || index1<0 || index2<0 || index1>nums.length-1 || index2>nums.length-1){
                //new element = -numberOfMovesa
                numberOfMoves++;
                nums.splice((nums.length-1)/2+1,0,`-${numberOfMoves}a`);
                nums.splice((nums.length-1)/2+1,0,`-${numberOfMoves}a`);
                console.log("Invalid input! Adding additional elements to the board")

            } else { //cheat protection has been passed
                    //if two elements are matching - print and remove the element
                if(nums[index1] == nums[index2] ){
                    numberOfMoves++;
                    console.log(`Congrats! You have found matching elements - ${nums[index1]}!`);
                    let spliced = nums.splice(index1,1);
                    //second el = nums.indexOf(spliced[0]);
                    nums.splice(nums.indexOf(spliced[0]),1);
                    

                } else { //not matching - then print "Try again"
                    numberOfMoves++;
                    console.log('Try again!');
                    
                }

                //if all guessed before receiving "end":
                if(nums.length == 0){
                    console.log(`You have won in ${numberOfMoves} turns!`);
                    break;
                }
            }

            
            //if input is "end"
        } else {
            console.log(`Sorry you lose :(\n${nums.join(" ")}`);
        }
    }
}

memoryGame( [
    "1 1 2 2 3 3 4 4 5 5", 
    "1 0",
    "-1 0",
    "1 0", 
    "1 0", 
    "1 0", 
    "end"
    ]);

    // memoryGame([
    //     "a 2 4 a 2 4", 
    //     "0 3", 
    //     "0 2",
    //     "0 1",
    //     "0 1", 
    //     "end"
    //     ]);

    //   memoryGame([
    //     "a 2 4 a 2 4", 
    //     "4 0", 
    //     "0 2",
    //     "0 1",
    //     "0 1", 
    //     "end"
    //     ]) ;