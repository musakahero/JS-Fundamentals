function employees(input){
    let obj = {};

    for (let i = 0; i < input.length; i++) {
        obj[input[i]] = Number(input[i].length);
        console.log(`Name: ${Object.keys(obj)[i]} -- Personal Number: ${Object.values(obj)[i]}`);
    }

}

employees([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
    ]);

employees([
    'Samuel Jackson',
    'Will Smith',
    'Bruce Willis',
    'Tom Holland'
    ]);