function bonus(input){
    let students = Number(input[0]);
    let lectures = Number(input[1]);
    let additionalBonus = Number(input[2]);
    let highestBonusAttendances = 0;

    let currBonus = 0;
    let highestBonus = 0;

    for (let i = 3; i<input.length; i++){
        currBonus = Number(input[i]) / lectures * (5 + additionalBonus);

        if(currBonus>highestBonus){
            highestBonus = currBonus;
            highestBonusAttendances = Number(input[i]);
        }

    }

    //print
    console.log(`Max Bonus: ${Math.ceil(highestBonus)}.`);
    console.log(`The student has attended ${highestBonusAttendances} lectures.`);

}

bonus(['5',  '25', '30',
    '12', '19', '24','16', '20']);