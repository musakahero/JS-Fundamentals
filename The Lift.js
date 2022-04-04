function theLift(input){
    //let wagonCurrSpace = 0;
    let waitingPeople = Number(input[0]);
    let lift = input[1].split(" ").map(Number); 
    let sumOfPassengers = 0;
    let liftMax = 4*lift.length;


        //get sum of passengers
    for (let index of lift) {
        sumOfPassengers+=index;
    }

//if there's free space and there are still ppl in the queue
    if(sumOfPassengers<liftMax && waitingPeople>0){
        let index = 0;
        //iterate through the wagon to add values
        while(index < lift.length){
            while (lift[index]<4 && waitingPeople>0){
                lift[index]++;
                waitingPeople--;
                sumOfPassengers++;
            }
            index++;
        }

        //if there's no space or there are no ppl in queue 
        if(sumOfPassengers==liftMax || waitingPeople==0){
            //if no more ppl in queue & lift has empty spots
            if(waitingPeople == 0 && sumOfPassengers<liftMax ){
                console.log(`The lift has empty spots!\n${lift.join(" ")}`);               
            } 
            //if people still in queue and no more empty spots
            else if (waitingPeople>0 && sumOfPassengers==liftMax ){
                console.log(`There isn't enough space! ${waitingPeople} people in a queue!\n${lift.join(" ")}`);
            } 
            //if no more ppl in queue & lift has no more empty spots
            else if (sumOfPassengers==liftMax && waitingPeople==0){
                console.log(lift.join(" "));
            }
        }
        
    }    

}


// theLift([
//     "15",
//     "0 0 0 0 0"
//    ]);

//    theLift(["20",
//     "0 2 0"]);  