function inventory(input){
    let heroes = [];

    for (const line of input) {
        let info = line.split(" / ")
        let heroName = info[0];
        let heroLevel = Number(info[1]);
        let items = info[2];
        heroes.push({name:heroName, level:heroLevel, items:items});
    }

    //sort
    heroes.sort((a,b)=> a.level - b.level);

    //print
    for (const hero of heroes) {
        console.log(`Hero: ${hero.name}\nlevel => ${hero.level}\nitems => ${hero.items}`);
    }
}

inventory([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
    ]
    );

// inventory([
//     'Batman / 2 / Banana, Gun',
//     'Superman / 18 / Sword',
//     'Poppy / 28 / Sentinel, Antara'
//     ]
//     );