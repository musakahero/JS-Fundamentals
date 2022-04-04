function blackFlag(input){
    let daysOfPlunder = Number(input[0]);
    let dailyPlunder = Number(input[1]);
    let expectedPlunder = Number(input[2]);

    let currPlunder = 0;
    let currDay = 0;


    while (currDay<daysOfPlunder){
        currDay++;

        if(currDay%3==0){            
            let additionalPlunder = dailyPlunder*0.5;
            currPlunder+=dailyPlunder + additionalPlunder;
        } else {
            currPlunder+=dailyPlunder;
        }
         
        if(currDay%5==0){
            let reducedPlunder = currPlunder*0.3;
            currPlunder-=reducedPlunder;
        }


 
    }

 
    if(currPlunder>=expectedPlunder){
        console.log(`Ahoy! ${currPlunder.toFixed(2)} plunder gained.`);
    } else {
        let percentageOfPlunderLeft = (currPlunder / expectedPlunder)*100;

        console.log(`Collected only ${percentageOfPlunderLeft.toFixed(2)}% of the plunder.`)
    }
}

// blackFlag(["5",
// "40",
// "100"]);
blackFlag(["10",
"20",
"380"]);