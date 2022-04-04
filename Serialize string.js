function solve(input){
    let strToFind = input[0];
    let resultObj = {};
    
    for(let i = 0; i < strToFind.length; i++){
        if(!resultObj.hasOwnProperty(strToFind[i])){
            resultObj[strToFind[i]] = [];

            for(let j = 0; j < strToFind.length; j++){
                if(strToFind[i] == strToFind[j]){
                    resultObj[strToFind[i]].push(j);
                }
            }
        }
    }

    for (const key in resultObj) {
        console.log(`${key}:${resultObj[key].join('/')}`);
    }
}

//solve(["abababa"]);

solve(["avjavamsdmcalsdm"]);