function sorting(arr){
let result = arr.sort((a,b)=> b-a);


for(let i = 1; i < arr.length; i = i+2){
    let spliced = result.splice(arr.length-1,1);
    result.splice(i,0,spliced[0]);
    
}
    
    console.log(result.join(" "));
    

}


sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);

