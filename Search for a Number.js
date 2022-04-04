function findNumber(arr1, arr2){

    let numsToTake = arr2[0];
    let numsToDelete = arr2[1];
    let numToSearch = arr2[2];

    let takenNumbers = arr1.slice(0,numsToTake);
    takenNumbers.splice(0,numsToDelete);

    let count = 0;
    for (const num of takenNumbers) {
        if(num===numToSearch){
            count++;
        }
    }

    console.log(`Number ${numToSearch} occurs ${count} times.`)
    
}

findNumber([5, 2, 3, 4, 1, 6], [5, 2, 3]);
findNumber([7, 1, 5, 8, 2, 7],[3, 1, 5])