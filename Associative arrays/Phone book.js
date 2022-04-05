function phonebook(input){
    let bookObj = {};

    for (const line of input) {
        let name = line.split(" ")[0];
        let number = line.split(" ")[1];

        // if(Object.keys(bookObj).includes(name)){

        // }
        bookObj[name]= number;
    }

    for (const key in bookObj) {
        console.log(`${key} -> ${bookObj[key]}`)
    }
}

phonebook(['George 0552554',
'Peter 087587',
'George 0453112',
'Bill 0845344']
);