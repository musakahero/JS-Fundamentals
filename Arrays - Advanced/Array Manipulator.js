function manipulateArr(arrOfNums, arrOfCmds){
    
    for(let i = 0; i<arrOfCmds.length; i++){
        let cmdStringToArray = arrOfCmds[i].split(" ");
        
        let command = cmdStringToArray[0];

        while (command!="print"){
    
            switch(command){
                case "add":
                    let index = cmdStringToArray[1];
                    let element = cmdStringToArray[2];      
                    arrOfNums.splice(index,0,element);
                    break;
                
                case "addMany":
                    let index = cmdStringToArray[1];
                    let toAdd = cmdStringToArray.slice(1);
                    arrOfNums.splice(index,0,toAdd);
                    break;

                case "contains":
                    let element = cmdStringToArray[1];
                    if (arrOfNums.includes(element)){
                        console.log(arrOfNums.indexOf(element));
                    }
                    break;

                case "remove":
                    let index = cmdStringToArray[1];
                    arrOfNums.splice(index,1);
                    break;

                case "shift":
                    let positions = cmdStringToArray[1];
                    let newArray = [];

                    for(let i = 0; i<arrOfNums.length; i++){
                        let copied = arrOfNums.slice(i,i+1);

                        if((i-2)>=0){
                            newArray.splice(i-2,0,copied[0]);
                        } else {
                            newArray.splice((arrOfNums.length-positions),0,copied[0]);
                        }
                        
                    }
                arrOfNums.splice(0,arr.arrOfNums.length,newArray);
                break;

                case "sumPairs":
                    let sum = 0;
                    for(let i = 0; i<arrOfNums.length; i = i+2){
                        sum = arrOfNums[i]+arrOfNums[i+1];
                        arrOfNums.splice(i,2,sum);
                    }
                break;
            }
    
        }
        
    }
    console.log(`[ ${arrOfNums.join(", ")} ]`);
}

manipulateArr([1, 2, 4, 5, 6, 7], ['add 1 8', 'contains 1', 'contains 3', 'print']);