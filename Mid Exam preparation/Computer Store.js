function receipt(input){
    let totalAfterTaxes = 0;
    let totalAmountOfTaxes = 0;
    let totalBeforeTaxes = 0;

    for(let i = 0; i<input.length; i++){
        

        if(input[i]=="special" || input[i]== "regular"){
            if(input[i]=="special"){
                totalAfterTaxes -= totalAfterTaxes*0.1;
            }         

            if(totalAfterTaxes==0){
                console.log("Invalid order!");
            } else {
                console.log(`Congratulations you've just bought a new computer!\nPrice without taxes: ${totalBeforeTaxes.toFixed(2)}$\nTaxes: ${totalAmountOfTaxes.toFixed(2)}$\n-----------\nTotal price: ${totalAfterTaxes.toFixed(2)}$`)
            }
            

        } else {
            let priceBeforeTax = Number(input[i]);
            let priceAfterTax = 0;

            if(priceBeforeTax <= 0){
                console.log("Invalid price!");
                continue;
            }
            
            totalBeforeTaxes+=priceBeforeTax;
            let tax = priceBeforeTax*0.2;
            totalAmountOfTaxes += tax;
            priceAfterTax = priceBeforeTax + tax;
            totalAfterTaxes+= priceAfterTax;
        }
    }

}

// receipt([
//     '1050',
//     '200',
//     '450',
//     '2',
//     '18.50',
//     '16.86',
//     'special'
//     ]);    

// receipt([
//     '1023', 
//     '15', 
//     '-20',
//     '-5.50',
//     '450', 
//     '20', 
//     '17.66', 
//     '19.30', 'regular'
//     ])
    
receipt([
    'regular'
    ])
    