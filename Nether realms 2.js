function solve(input) {
    let demonBook = {};
    let regexp = /\s*,\s*/g;
    let demonNames = input.split(regexp);

    let nameTest = /[^\s ,]+/;
    for (const name of demonNames) {
        //check if test is valid, if not - skip it
        if (nameTest.test(name)) {
            //calculate demonHealth
            let healthPattern = /[^0-9\+\-\*\/\.]/g;
            let charsToSum = name.match(healthPattern);
            let demonHealth = 0;
            for (const char of charsToSum) {
                let value = char.charCodeAt(0);
                demonHealth += value;
            }

            //calculate demonPower
            //add & substract
            let demonPower = 0;
            let powerPattern = /[\+\-]*\d+(\.\d+)*/g;
            let charsToCalc = name.match(powerPattern);
            if (charsToCalc == null) {
                demonPower = 0;
            } else {
                let numsToCalc = charsToCalc.map(Number);
                numsToCalc.map(x => demonPower += x);

            }
            //multiply and divide
            let multiDivTest = /[\*\/]/g;
            let multiDivMatches = name.match(multiDivTest);
            if (multiDivMatches != null) {
                for (const oper of multiDivMatches) {
                    if (oper == "*") {
                        demonPower *= 2;
                    } else if (oper == "/") {
                        demonPower /= 2;
                    }
                }
            }

            if (!demonBook.hasOwnProperty(name)) {
                demonBook[name] = [demonHealth, demonPower];
            }

        } else {
            continue;
        }
    }
    let sorted = Object.entries(demonBook);
    sorted.sort((a, b) => a[0].localeCompare(b[0]));
    for (const [name, arr] of sorted) {
        console.log(`${name} - ${arr[0]} health, ${arr[1].toFixed(2)} damage`);
    }
}

solve('M3ph-0.5s-0.5t0.0**');
solve('M3ph1st0**, Azazel');
solve('Gos/ho');
solve('M3ph1st0**,     Azazel');