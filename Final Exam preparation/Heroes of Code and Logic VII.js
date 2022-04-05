function solve(input) {
    let numOfHeroes = Number(input.shift());
    let heroes = {};

    for (let i = 0; i < numOfHeroes; i++) {
        let heroProps = input[i].split(' ');
        let heroName = heroProps[0];
        let heroHP = Number(heroProps[1]);
        let heroMP = Number(heroProps[2]);

        heroes[heroName] = {};
        heroes[heroName].heroHP = heroHP;
        heroes[heroName].heroMP = heroMP;

    }

    for (let i = numOfHeroes; input[i] !== 'End'; i++) {
        let commandProps = input[i].split(' - ');
        let cmd = commandProps[0];
        let heroToUse = commandProps[1];

        if (cmd === 'CastSpell') {     
            let MPneeded = Number(commandProps[2]);
            let spellName = commandProps[3];

            //if hero has enough MP - cast, else print
            if (heroes[heroToUse].heroMP >= MPneeded) {
                heroes[heroToUse].heroMP -= MPneeded;
                console.log(`${heroToUse} has successfully cast ${spellName} and now has ${heroes[heroToUse].heroMP} MP!`);
            } else {
                console.log(`${heroToUse} does not have enough MP to cast ${spellName}!`);
            }

        } else if (cmd === 'TakeDamage') {
            let damageToTake = Number(commandProps[2]);
            let attacker = commandProps[3];
            heroes[heroToUse].heroHP -= damageToTake;
            //if hero is alive - print, else delete from party
            if(heroes[heroToUse].heroHP > 0){
                console.log(`${heroToUse} was hit for ${damageToTake} HP by ${attacker} and now has ${heroes[heroToUse].heroHP} HP left!`);
            } else {
                console.log(`${heroToUse} has been killed by ${attacker}!`);
                delete heroes[heroToUse];
            }

        } else if (cmd === 'Recharge') {
            let MPGained = Number(commandProps[2]);

            //check if max MP is reached
            if(heroes[heroToUse].heroMP + MPGained > 200){
                let amountGained = 200 - heroes[heroToUse].heroMP;
                heroes[heroToUse].heroMP = 200;
                console.log(`${heroToUse} recharged for ${amountGained} MP!`);
                
            } else {
                heroes[heroToUse].heroMP += MPGained;
                console.log(`${heroToUse} recharged for ${MPGained} MP!`);
            }
        } else if (cmd === 'Heal') {
            let HPGained = Number(commandProps[2]);

            //check if max HP is reached
            if(heroes[heroToUse].heroHP + HPGained > 100){
                let amountGained = 100 - heroes[heroToUse].heroHP;
                heroes[heroToUse].heroHP = 100;
                console.log(`${heroToUse} healed for ${amountGained} HP!`);
                
            } else {
                heroes[heroToUse].heroHP += HPGained;
                console.log(`${heroToUse} healed for ${HPGained} HP!`);
            }
        }
    }
    //print
    for (const keyHeroName of Object.keys(heroes)) {
        console.log(`${keyHeroName}`);
        console.log(`  HP: ${heroes[keyHeroName].heroHP}`);
        console.log(`  MP: ${heroes[keyHeroName].heroMP}`);
    }
}

// solve(['2',
//     'Solmyr 85 120',
//     'Kyrre 99 50',
//     'Heal - Solmyr - 10',
//     'Recharge - Solmyr - 50',
//     'TakeDamage - Kyrre - 66 - Orc',
//     'CastSpell - Kyrre - 15 - ViewEarth',
//     'End'
// ]);

solve(['4',
    'Adela 90 150',
    'SirMullich 70 40',
    'Ivor 1 111',
    'Tyris 94 61',
    'Heal - SirMullich - 50',
    'Recharge - Adela - 100',
    'CastSpell - Tyris - 1000 - Fireball',
    'TakeDamage - Tyris - 99 - Fireball',
    'TakeDamage - Ivor - 3 - Mosquito',
    'End']);