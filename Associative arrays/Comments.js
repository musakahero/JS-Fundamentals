function solve(input){
    /*

    >object articles (key: articleName, val:list of users array)
        -list of users array (user1, user2...userN objects)
            -userN object (key: comentTitle; val:commentContent)

    >separate list of users;
    >separate list of articles;
    */ 

    // let articlesObj = {
    //      [articleName]:{
    //          [userPosting]:[
    //              commentTitle, commentContent
    //          ]
    //      }
    // }

    let articlesObj = {};
    let usersList = [];
    let articlesList = [];
    let articlesCountofCommentsObj = {};

    for (const line of input) {
        let tokens = line.split(' ');
        if((tokens[0]) == 'user'){
            usersList.push(tokens[1]);

        } else if(tokens[0] == 'article'){
            let articleName = line.split('article ')[1];
            articlesList.push(articleName);

        } else if(line.includes(':')){
            let infoArray = line.split(': ');
            let [userPosting, articleName] = infoArray[0].split(' posts on ');
            let [commentTitle, commentContent] = infoArray[1].split(', ');
            
            if(articlesList.includes(articleName) && usersList.includes(userPosting)){
                if(!articlesObj.hasOwnProperty(articleName)){
                    articlesObj[articleName] = {};
                    articlesCountofCommentsObj[articleName] = 0;
                }
                if(!articlesObj[articleName].hasOwnProperty(userPosting)){
                    articlesObj[articleName][userPosting] = [];
                }
                
                articlesObj[articleName][userPosting].push(commentTitle);
                articlesObj[articleName][userPosting].push(commentContent);
                articlesCountofCommentsObj[articleName]++;
    
            }
            
        }
    }



    articleCountEntries = Object.entries(articlesCountofCommentsObj);
    articleCountEntries.sort((a,b) => b[1]-a[1]);

    for (const [article, userObj] of articleCountEntries) {
        let usersEntries = Object.entries(articlesObj[article]); //[[user, commentArr ]... ]
        usersEntries.sort((a,b) => a[0].localeCompare(b[0]));
        console.log(`Comments on ${article}`);

        for (const [user, commentArr] of usersEntries) {
            console.log(`--- From user ${user}: ${commentArr[0]} - ${commentArr[1]}`);
            
        }
    }


}

solve(['user aUser123', 'someUser posts on someArticle: NoTitle, stupidComment', 'article Books', 'article Movies', 'article Shopping', 'user someUser', 'user uSeR4', 'user lastUser', 'uSeR4 posts on Books: I like books, I do really like them', 'uSeR4 posts on Movies: I also like movies, I really do', 'someUser posts on Shopping: title, I go shopping every day', 'someUser posts on Movies: Like, I also like movies very much']);

console.log('---------------------');
solve(['user Mark', 'Mark posts on someArticle: NoTitle, stupidComment', 'article Bobby', 'article Steven', 'user Liam', 'user Henry', 'Mark posts on Bobby: Is, I do really like them', 'Mark posts on Steven: title, Run', 'someUser posts on Movies: Like']);