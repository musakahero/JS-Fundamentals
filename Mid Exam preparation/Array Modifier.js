function modify(input){
    let arrOfNums = input[0].split(" ").map(Number);

    for(let i = 1; i<input.length; i++){
        let currElementArr = input[i].split(" ");
        let currCmd = currElementArr[0];

        if (currCmd!="end"){
            switch (currCmd){
                case "swap":
                    // let swapIndex1 = currElementArr[1];
                    // let swapIndex2 = currElementArr[2];
                    // let firstElSpliced = arrOfNums.splice(swapIndex1, 1); //take element at index1

                    // if (swapIndex2 != 0){
                        
                    // let secondElSpliced = arrOfNums.splice(swapIndex2-1,1,firstElSpliced[0]);
                    // arrOfNums.splice(swapIndex1,0,secondElSpliced[0]);
                    
                    // } else {
                    //     let secondElSpliced = arrOfNums.splice(swapIndex2,1,firstElSpliced[0]);
                    //     arrOfNums.splice(swapIndex1,0,secondElSpliced[0]);
                    // }
                    
                    // break;

                    let swapIndex1 = Number(currElementArr[1]);
                    let swapIndex2 = Number(currElementArr[2]);
                    let temp = arrOfNums[swapIndex1];
                    arrOfNums[swapIndex1] = arrOfNums[swapIndex2];
                    arrOfNums[swapIndex2] = temp;
                    break;
                    

                case "multiply":
                    let mulIndex1 = currElementArr[1];
                    let mulIndex2 = currElementArr[2];
                    arrOfNums[mulIndex1] *= arrOfNums[mulIndex2];
                    break;

                case "decrease":
                    for(let j = 0; j < arrOfNums.length; j++){
                        arrOfNums[j] -= 1;
                    }
                break;

            }

        }

    }
    console.log(arrOfNums.join(", "));
}

modify([
    '1 2 3 4',
    'swap 0 1',
    'swap 1 2',
    'swap 2 3',
    'multiply 1 2',
    'decrease',
    'end'
  ]
);