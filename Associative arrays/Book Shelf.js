//Structure will be as follows:
//shelves {}
//          -ID: {}
//              -genre: {} ...
//                    -author:title ...
//
// shelvesCountOfBooks {}
//                      -genre:{}
         
function solve(input){
    let shelvesObj = {};
    let shelvesCountOfBooks = {};
    
    //1. read input and add values to the objects
    for (const line of input) {
        if(line.includes('->')){ //create shelf if ID not taken
            let [shelfID, shelfGenre] = line.split(' -> ');
            
            if(!shelvesObj.hasOwnProperty(shelfID)){
                shelvesObj[shelfID] = {};
                shelvesCountOfBooks[shelfID] = 0;
                shelvesObj[shelfID][shelfGenre] = {};
            }
        } else if (line.includes(': ')){ //if a shelf with this genre exists, add book to the shelf
            let [bookTitle, authorAndBookInfo] = line.split(': ');
            let [bookAuthor, bookGenre] = authorAndBookInfo.split(', ');
            
            for (const shelfID in shelvesObj) {
                if(shelvesObj[shelfID].hasOwnProperty(bookGenre)){
                    shelvesObj[shelfID][bookGenre][bookAuthor] = bookTitle;
                    shelvesCountOfBooks[shelfID]++;
                }
            }
        }
    }
    
    //2. sort shelves by count of books in descending
    let sortedShelfIDs = Object.entries(shelvesCountOfBooks);//[ [genre, numofBooks],...  ]
    sortedShelfIDs.sort((a,b)=>b[1] - a[1]);
    

    for (const [shelfID, numOfBooks] of sortedShelfIDs) {
        let genre = Object.keys(shelvesObj[shelfID])[0];
        console.log(`${shelfID} ${genre}: ${numOfBooks}`);

         //3. for each shelf, sort the books by title

        let sortedBooks = Object.entries(shelvesObj[shelfID][genre]); // [ [bookAuthor, bookTitle]... ]
        sortedBooks.sort((a,b) => a[1].localeCompare(b[1]));

        for (const [bookAuthor, bookTitle] of sortedBooks) {
            console.log(`--> ${bookTitle}: ${bookAuthor}`);
        }       
    }
}

solve(['1 -> history', '1 -> action', 'Death in Time: Criss Bell, mystery', '2 -> mystery', '3 -> sci-fi', 'Child of Silver: Bruce Rich, mystery', 'Hurting Secrets: Dustin Bolt, action', 'Future of Dawn: Aiden Rose, sci-fi', 'Lions and Rats: Gabe Roads, history', '2 -> romance', 'Effect of the Void: Shay B, romance', 'Losing Dreams: Gail Starr, sci-fi', 'Name of Earth: Jo Bell, sci-fi', 'Pilots of Stone: Brook Jay, history']);

console.log('-----------------------------');

solve(['1 -> mystery', '2 -> sci-fi',
'Child of Silver: Bruce Rich, mystery',
'Lions and Rats: Gabe Roads, history',
'Effect of the Void: Shay B, romance',
'Losing Dreams: Gail Starr, sci-fi',
'Name of Earth: Jo Bell, sci-fi']
);