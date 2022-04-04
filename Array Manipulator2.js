function manipulateArr(arrOfNums, arrOfCmds){
    
    for(let i = 0; i<arrOfCmds.length; i++){
        let cmdStringToArray = arrOfCmds[i].split(" ");
        
        let command = cmdStringToArray[0];

        if (command!="print"){
    
            switch(command){
                case "add":
                    let index = Number(cmdStringToArray[1]);
                    let element = Number(cmdStringToArray[2]);      
                    arrOfNums.splice(index,0,element);
                    break;
                
                case "addMany":
                    let indexMany = Number(cmdStringToArray[1]);
                    let toAdd = cmdStringToArray.slice(1);
                    
                    for (let j = toAdd.length-1; j > 0; j--){
                        arrOfNums.splice(indexMany,0,toAdd[j]);
                    }
                    
                    break;

                case "contains":
                    let elementMany = Number(cmdStringToArray[1]);
                    if (arrOfNums.includes(elementMany)){
                        console.log(arrOfNums.indexOf(elementMany));
                    } else {
                        console.log('-1');
                    }
                    break;

                case "remove":
                    let indexRemove = Number(cmdStringToArray[1]);
                    arrOfNums.splice(indexRemove,1);
                    break;

                case "shift":
                    let positions = Number(cmdStringToArray[1]);
                    for(let i = 0; i < positions; i++){
                        let shifted = arrOfNums.shift();
                        arrOfNums.push(shifted);
                    }
                
                break;

                case "sumPairs":
                    let sum = 0;
                    for(let i = 0; i<arrOfNums.length; i++){
                        sum = arrOfNums[i]+arrOfNums[i+1];
                        arrOfNums.splice(i,2,sum);
                    }
                break;
            }
    
        }
        
    }
    console.log(`[ ${arrOfNums.join(", ")} ]`);
}

//manipulateArr([1, 2, 4, 5, 6, 7], ['add 1 8', 'contains 1', 'contains 3', 'print']);
manipulateArr([2, 2, 4, 2, 4], ["add 1 4", "sumPairs", "print"])