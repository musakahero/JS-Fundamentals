function seq(input){
    let allArrays = [];
    let allValidArrs = [];
    //fill 1 list with all input arrays
    for (const str of input) {
    allArrays.push(JSON.parse(str));
    } 

    



    // for (let i = 0; i < allArrays.length; i++) {
    //     let firstArr = allArrays[i];
    //     let secondArr = allArrays[i+1];
    //     if(compareArr(firstArr,secondArr)){
            
    //     }
        
    // }

    function compareArr(arr1, arr2){
       let isSame = true;

       if(arr1.length > arr2.length){
        for (const number of arr1) {
            if(!arr2.includes(number)){
                isSame = false;
                break;
            }
        }
       } else{
        for (const number of arr2) {
            if(!arr1.includes(number)){
                isSame = false;
                break;
            }
        }
       }
       
       return isSame;       
    }
}

seq(["[-3, -2, -1, 0, 1, 2, 3, 4]",
"[10, 1, -17, 0, 2, 13]",
"[4, -3, 3, -2, 2, -1, 1, 0]"]
);

// seq(["[7.14, 7.180, 7.339, 80.099]",
// "[7.339, 80.0990, 7.140000, 7.18]",
// "[7.339, 7.180, 7.14, 80.099]"]
// )