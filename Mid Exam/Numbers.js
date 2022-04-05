function numbers(input){
    let nums = input[0].split(" ").map(Number);

    for(let i = 1; i<input.length; i++){
        let commandArray = input[i].split(" ");
        let command = commandArray.shift();
        commandArray = commandArray.map(Number);
        let argument1 = commandArray[0];
        let argument2 = commandArray[1];
        

        if(command!="Finish"){
            switch(command){
                case "Add":
                    add(nums,argument1);
                break;

                case "Remove":
                    remove(nums,argument1);
                break;

                case "Replace":
                    replace(nums,argument1,argument2);
                break;

                case "Collapse":
                  collapse(nums,argument1);
                break;

                default: // pot redundancy,make sure there's no random cmd entered 
                continue;
            }
        } else if(command=="Finish") { //potential redundancy, make sure there's no random cmd entered
            console.log(nums.join(" "));
            break;
        }
    }

    function add(numsArr, value){
        numsArr.push(value);
    }
    function remove(numsArr,value){
        if(numsArr.includes(value)){
            let toRemove = numsArr.indexOf(value);
            numsArr.splice(toRemove, 1);
        }
    }
    function replace(numsArr, value1, value2){
        if(numsArr.includes(value1)){
            let toReplace = numsArr.indexOf(value1);
            numsArr[toReplace] = value2;
        }
    }
    function collapse(numsArr, value){
        
        for(let i = 0; i < numsArr.length; i++){
            if(numsArr[i]<value){
                numsArr.splice(i,1);
                i--;
            }
        }
    }
}

// numbers(["1 4 5 19",
// "Add 1",
// "Remove 4",
// "Finish"]);

// numbers(["1 20 -1 10",
// "Collapse 8",
// "Finish"]);

// numbers(["5 9 70 -56 9 9",
// "Replace 9 10",
// "Remove 9",
// "Finish"]);
