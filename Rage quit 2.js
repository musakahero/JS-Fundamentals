function solve(input) {
    let pattern = /(?<stringToRepeat>[^0-9]+)(?<count>[0-9]+)/g;
    let result = '';
    let uniqueSymbolsSet = new Set();

    while ((array1 = pattern.exec(input)) !== null) {

        let stringToRep = array1.groups.stringToRepeat.toUpperCase();
        let count = array1.groups.count;


        for (let i = 0; i < count; i++) {
            result += stringToRep;
        }
        for (const char of stringToRep) {

            if (count > 0) {
                uniqueSymbolsSet.add(char);
            }
        }

    }
    console.log(`Unique symbols used: ${uniqueSymbolsSet.size}`);
    console.log(result);
}

//solve('a3');
//solve('aSd2&5s@1');
solve('e0')
//solve('e-!btI17z=E:DMJ19U1Tvg VQ>11P"qCmo.-0YHYu~o%/%b.}a[=d15fz^"{0^/pg.Ft{W12`aD<l&$W&)*yF1WLV9_GmTf(d0($!$`e/{D\'xi]-~17 *%p"%|N>zq@ %xBD18<Y(fHh`@gu#Z#p"Z<v13fI]\':\Iz.17*W:\mwV`z-15g@hUYE{_$~}+X%*nytkW15');

