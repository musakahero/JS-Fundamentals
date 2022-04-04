function delivery(input){
    let nums = input[0].split("@").map(Number); //num array
    let currHouseIndex = 0;
    let isValentineEverywhere = true;
    let failedCounter = 0;

    //iterate through the input array, after the 0 element and check for the command
 for(let i = 1; i < input.length; i++){
    let command = input[i].split(" ")[0];
    let jumpLength = Number(input[i].split(" ")[1]);

    //if command is not Love!, then proceed to jumping

    if (command!="Love!"){
        //check if jump goes outside the bounds
        if(currHouseIndex + jumpLength > nums.length-1) {
            currHouseIndex = 0;
 
            //if house is 0 before reducing it - already had valentine's day
            if(nums[currHouseIndex]==0){
                console.log(`Place ${currHouseIndex} already had Valentine's day.`);

            } else { //else reduce
                nums[currHouseIndex] -= 2;

                //hearts are equal to 0? 
                if (nums[currHouseIndex]==0){
                    console.log(`Place ${currHouseIndex} has Valentine's day.`);
                }
            }
                    
        } else {

                //if house is 0 before reducing it - already had valentine's day
                currHouseIndex += jumpLength;

                if(nums[currHouseIndex]==0){
                    console.log(`Place ${currHouseIndex} already had Valentine's day.`);
                } else { //else reduce

                    nums[currHouseIndex]-= 2;
                    
                ////hearts are equal to 0?
                if (nums[currHouseIndex]==0){
                    console.log(`Place ${currHouseIndex} has Valentine's day.`);
                    }
                }
                

        }
        
        //print

    } 

 }
//check if all houses had valentine's day and count how many failed
for(let j = 0; j < nums.length; j++){
    if(nums[j]>0){
        isValentineEverywhere = false;
        failedCounter++;              
    } 
}

console.log(`Cupid's last position was ${currHouseIndex}.`);
if(isValentineEverywhere==false){
    console.log(`Cupid has failed ${failedCounter} places.`);
} else {
    console.log(`Mission was successful.`);
}

}


delivery(["4@2@4@2",
"Jump 1",
"Jump 2",
"Jump 1",
"Jump 2",
"Jump 2",
"Jump 2",
"Love!"])
;
