function printXmasTree(height){
    let treeHeight = Number(height);
    let treeWidth = (height*2 - 1); //7
   
    let maxWidth = 1;
    let maxSpace = Math.floor(treeWidth/2);

    for(let j = 0; j < treeHeight; j++ ){
        let result = ''; 
        
        //print leftSide
        let spaceCounter =0;
        let leftSide = '';       
        while(spaceCounter<maxSpace){        
            leftSide += ' ';
            spaceCounter++;
        }
        //print midPart
        let hashCounter = 0;
        let midPart = '';
        while (hashCounter<maxWidth){
            midPart += '#';
            hashCounter+=1;
        }
         
        maxWidth+=2;
        maxSpace-=1;
        result += leftSide + midPart + leftSide.split('').reverse().join('');
        console.log(result);        
    }
    

    //draw the final part
    maxSpace = treeWidth/2 - 1; //2
    let log = "#";
    let spaceCounter =0;
    let leftSide = '';       
    while(spaceCounter<maxSpace){        
        leftSide += ' ';
        spaceCounter++;
    }
    console.log(leftSide + log + leftSide);

    
}



printXmasTree(40);
