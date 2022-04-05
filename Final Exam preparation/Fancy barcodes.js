function solve(input) {
    let inputValidation = /^@#+[A-Z][A-Za-z0-9]{4,}[A-Z]@#+$/;
    const NUM_OF_BARCODES = Number(input.shift());
    let barcodeCounter = 0;

    for (const LINE of input) {

        if (inputValidation.test(LINE)) {
            const PROD_VALIDATION = /\d/g;
            let prodGroup = '';
            let allDigits = LINE.match(PROD_VALIDATION);
            if (allDigits === null) {
                prodGroup = '00';
            } else {
                prodGroup = allDigits.join('');
            }

            console.log(`Product group: ${prodGroup}`);
        } else {
            console.log('Invalid barcode');
        }

        barcodeCounter++;
        //stop taking barcodes when NUM_OF_BARCODES is reached
        if (barcodeCounter === NUM_OF_BARCODES) {
            break;
        }
    }

}

// solve((["3",
// "@#FreshFisH@#",
// "@###Brea0D@###",
// "@##Che4s6E@##"])
// );
solve((["6",
    "@###Val1d1teM@###",
    "@#ValidIteM@#",
    "##InvaliDiteM##",
    "@InvalidIteM@",
    "@#Invalid_IteM@#",
    "@#ValiditeM@#"])
);
console.log('=====');
solve((["6",
    "@###Vаl1d1teM@###",
    "@#ValidIteM@#",
    "##InvaliDiteM##",
    "@InvalidIteM@",
    "@#Invalid_IteM@#",
    "@#ValiditeM@#",
    "@#ValiditeM@#"])
);

