function solve(input){
    let result = [];

    for (const line of input) {
        if (line!='end'){
            let currChar = line[0];
            let indexesArr = line.split(':')[1].split('/');

            for (const index of indexesArr) {
                result[index] = currChar;
            }
        }
    }

    console.log(result.join(''));
    
}

solve(['a:0/2/4/6',
'b:1/3/5',
'end']);
console.log('-----------------');
solve(['a:0/3/5/11',
'v:1/4',
'j:2',
'm:6/9/15',
's:7/13',
'd:8/14',
'c:10',
'l:12',
'end']);