function solve(input) {
    let pattern = />>(?<product>\w+)<<(?<price>\d+(\.\d+)*)!(?<quantity>\d+)/;
    let totalSpent = 0;
    console.log('Bought furniture:');
    for (const line of input) {
        if(line!='Purchase'){
            if(pattern.test(line)){
                let product = pattern.exec(line).groups.product;

                let price = pattern.exec(line).groups.price;

                let quantity = pattern.exec(line).groups.quantity;

                let total = Number(price) * Number(quantity);
                totalSpent+=total;
                
                //print
                console.log(`${product}`);
            };
        } else {
            console.log(`Total money spend: ${totalSpent.toFixed(2)}`);
            break;
        }      
    }
}

solve(['>>Sofa<<312.23!3',
'>>TV<<300!5',
'>Invalid<<!5',
'Purchase']
);
// solve(['>>Laptop<<312.2323!3',
// '>>TV<<300.21314!5',
// '>Invalid<<!5',
// '>>TV<<300.21314!20',
// '>>Invalid<!5',
// '>>TV<<30.21314!5',
// '>>Invalid<<!!5',
// 'Purchase']
// );
