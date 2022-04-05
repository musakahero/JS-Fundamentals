function shoot(input){
    let nums = input[0].split(" ").map(Number);
    let counter = 0;
    for(let i = 1; i < input.length; i++){
        let command = input[i];
        if(command!="End"){
            //check if actual number (possible edge case)
            let targetIndex = Number(command);
 
            //check if the index is out of bounds
            if(targetIndex>=nums.length || targetIndex<0){
                continue;
            } else {
                    //check if the target is shot already - modify number
                if(nums[targetIndex]!=-1){
                    let modValue = nums[targetIndex];
                    nums[targetIndex] = -1;
                    counter++;
                
                    //increase/reduce each number in the nums array
                    for (let j = 0; j < nums.length; j++) {
    
                        //if target was shot - continue
                        if(nums[j]==-1){
                            continue;
                        }
    
                        //if not - increase/reduce
                        if(nums[j]>modValue){
                            nums[j] -= modValue;
                        } else {
                            nums[j] += modValue;
                        }
                    }
                    //if shot already - continue
                } else {
                    continue;
                }
            }
            
        }else {
                //printing
                console.log(`Shot targets: ${counter} -> ${nums.join(" ")}`);
                break;
        }


 
    }

 
}
 
shoot(["24 50 36 70",
"0",
"4",
"3",
"1",
"End"]);
