function party(input){
    let vipList = [];
    let regList = [];
    let reservation = input.shift();

    while(reservation !="PARTY"){
        if(/^\d+/.test(reservation)){
            vipList.push(reservation);
        } else {
            regList.push(reservation);
        }

        reservation = input.shift();
    }

    for (const guest of input) {
        if(vipList.includes(guest)){
            vipList.splice(vipList.indexOf(guest), 1);
        } 
        
        if(regList.includes(guest)){
            regList.splice(regList.indexOf(guest),1);
        }
    }

    console.log(vipList.length + regList.length);
    vipList.forEach(element => console.log(element));
    regList.forEach(element => console.log(element));
    
}

// party(['7IK9Yo0h',
// '9NoBUajQ',
// 'Ce8vwPmE',
// 'SVQXQCbc',
// 'tSzE5t0p',
// 'PARTY',
// '9NoBUajQ',
// 'Ce8vwPmE',
// 'SVQXQCbc'
// ]
// );

party([
 
'm8rfQBvl',
'fc1oZCE0',
'UgffRkOn',
'7ugX7bm0',
'9CQBGUeJ',
'2FQZT3uC',
'dziNz78I',
'mdSGyQCJ',
'LjcVpmDL',
'fPXNHpm1',
'HTTbwRmM',
'B5yTkMQi',
'8N0FThqG',
'xys2FYzn',
'MDzcM9ZK',
'PARTY',
'2FQZT3uC',
'dziNz78I',
'mdSGyQCJ',
'LjcVpmDL',
'fPXNHpm1',
'HTTbwRmM',
'B5yTkMQi',
'8N0FThqG',

'm8rfQBvl',
'fc1oZCE0',
'UgffRkOn',
'7ugX7bm0',
'9CQBGUeJ'
]
);