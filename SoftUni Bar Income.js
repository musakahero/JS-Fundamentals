function solve(input) {
    let index = 0;
    let pattern = /%(?<name>[A-Z][a-z]+)%[^\|\$%\.]*<(?<product>\w+)>[^\|\$%\.]*\|(?<count>\d+)\|[^\|\$%\.]*?(?<price>\d+(\.\d+)*)\$/;
    let totalIncome = 0;

    while (input[index] != 'end of shift') {
        let line = input[index];
        if (pattern.test(line)) {
            let match = pattern.exec(line);
            let name = match.groups.name;
            let product = match.groups.product;
            let count = match.groups.count;
            let price = match.groups.price;
            let total = Number(price) * Number(count);

            console.log(`${name}: ${product} - ${total.toFixed(2)}`);
            totalIncome += total;
        }

        index++;
    }
    console.log(`Total income: ${totalIncome.toFixed(2)}`);
}

solve(['%George%<Croissant>|2|10.3$',
'%Peter%<Gum>|1|1.3$',
'%Maria%<Cola>|1|2.4$',
'end of shift']
);
// solve(['%InvalidName%<Croissant>|2|10.3$',
//     '%Peter%<Gum>1.3$',
//     '%Maria%<Cola>|1|2.4',
//     '%Valid%<Valid>valid|10|valid20$',
//     'end of shift']
// );