function solve(input) {

    let world = {};

    while (input[0] != 'Sail') {
        let tokens = input.shift().split('||');
        let town = tokens[0];
        let population = Number(tokens[1]);
        let gold = Number(tokens[2]);

        if (!world.hasOwnProperty(town)) {
            world[town] = { population, gold };
        } else {
            world[town].population += population;
            world[town].gold += gold;
        }
    }

    //remove 'Sail' from the input array
    input.shift();

    while (input[0] != 'End') {
        let tokens = input.shift().split('=>');
        let cmd = tokens[0];
        let targetTown = tokens[1];

        if (cmd == 'Plunder') {
            let killedPeople = Number(tokens[2]);
            let stolenGold = Number(tokens[3]);

            world[targetTown].population -= killedPeople;
            world[targetTown].gold -= stolenGold;
            console.log(`${targetTown} plundered! ${stolenGold} gold stolen, ${killedPeople} citizens killed.`);

            if (world[targetTown].population <= 0 || world[targetTown].gold <= 0) {
                console.log(`${targetTown} has been wiped off the map!`);
                delete world[targetTown];
            }
        } else if (cmd == 'Prosper') {
            let earnedGold = Number(tokens[2]);

            if (earnedGold < 0) {
                console.log('Gold added cannot be a negative number!');
            } else {
                world[targetTown].gold += earnedGold;
                console.log(`${earnedGold} gold added to the city treasury. ${targetTown} now has ${world[targetTown].gold} gold.`);
            }
        }
    }

    if (Object.keys(world).length != 0) {
        console.log(`Ahoy, Captain! There are ${Object.keys(world).length} wealthy settlements to go to:`);
        for (const town in world) {
            console.log(`${town} -> Population: ${world[town].population} citizens, Gold: ${world[town].gold} kg`);
        }
    } else {
        console.log(`Ahoy, Captain! All targets have been plundered and destroyed!`);
    }

}

solve(["Tortuga||345000||1250",
    "Santo Domingo||240000||630",
    "Havana||410000||1100",
    "Sail",
    "Plunder=>Tortuga=>75000=>380",
    "Prosper=>Santo Domingo=>180",
    "End"]);

console.log('====');

solve(["Nassau||95000||1000",
    "San Juan||930000||1250",
    "Campeche||270000||690",
    "Port Royal||320000||1000",
    "Port Royal||100000||2000",
    "Sail",
    "Prosper=>Port Royal=>-200",
    "Plunder=>Nassau=>94000=>750",
    "Plunder=>Nassau=>1000=>150",
    "Plunder=>Campeche=>150000=>690",
    "End"]);

console.log('====');