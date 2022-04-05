function sortBy2(arr){
    arr.sort( function (a,b) {
        if (a.length-b.length!=0)
        {
            return a.length-b.length;
        } else {
            return a.localeCompare(b);
        }
    });
    console.log(arr.join('\n'));
};

sortBy2(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George']);