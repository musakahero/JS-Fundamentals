function towns(input){

    for(let i = 0; i < input.length; i++){
        let town = (input[i].split(' | '))[0];
        let latitude = (input[i].split(' | '))[1];
        let longitude = (input[i].split(' | '))[2];

        let obj = {};
        obj['town'] = town;
        obj['latitude'] = Number(latitude).toFixed(2);
        obj['longitude'] = Number(longitude).toFixed(2);

        console.log(obj);
    }

}

towns(['Sofia | 42.696552 | 23.32601',
'Beijing | 39.913818 | 116.363625']
);

towns(['Plovdiv | 136.45 | 812.575']);

