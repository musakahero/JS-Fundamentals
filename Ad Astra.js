function solve(input) {
    let text = input[0];
    let fridge = {};
    let regex = /([#|])([A-Za-z\s]+)\1(\d{2}\/\d{2}\/\d{2})\1((\d{1,4}|10000))\1/g;

    let totalCalories = 0;

    let result = regex.exec(text);
    while (result != null) {
        let itemName = result[2];
        let expDate = result[3];
        let itemCalories = Number(result[4])

        fridge[itemName] = {};
        fridge[itemName]['expiration date'] = expDate;
        fridge[itemName]['nutrition'] = itemCalories;

        totalCalories += itemCalories;

        result = regex.exec(text);
    }

    let daysToLast = Math.floor(totalCalories / 2000);

    //print
    console.log(`You have food to last you for: ${daysToLast} days!`);
    for (const itemName of Object.keys(fridge)) {
        console.log(`Item: ${itemName}, Best before: ${fridge[itemName]['expiration date']}, Nutrition: ${fridge[itemName].nutrition}`);
    }

}

solve([
    '#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|'
]);
console.log('------');
solve(['$$#@@%^&#Fish#24/12/20#8500#|#Incorrect#19.03.20#450|$5*(@!#Ice Cream#03/10/21#9000#^#@aswe|Milk|05/09/20|2000|']);
console.log('------');
solve(['Hello|#Invalid food#19/03/20#450|$5*(@']);
console.log('Custom test:==============');
solve([
    '#Bread#19/03/21#0#|Invalid|03/03.20||Apples|08/10/20|0||Carrots|06/08/20|0||Not right|6.8.20|5|'
]);
console.log('Custom test:==============');
solve([
    '#Bread#19/03/21#99999#|Invalid|03/03.20||Apples|08/10/20|99999||Carrots|06/08/20|99999||Not right|6.8.20|5|'
]);