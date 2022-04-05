function armies(input){
    let armiesObj = {};
    let armiesTotals = {};

    for (const line of input) {
        if (line.includes('arrives')){
            let leader = line.split(' arrives')[0];
            armiesObj[leader] = {};
            armiesTotals[leader] = 0;

        } else if (line.includes(':')){
            let [leader, armyTokens] = line.split(': ');
            let [armyName, armyCount] = armyTokens.split(', ');
            if(armiesObj.hasOwnProperty(leader)){
                armiesObj[leader][armyName] = Number(armyCount);
                armiesTotals[leader] += Number(armyCount);
            }
            
        } else if (line.includes('+')){
            let [armyName, armyCount] = line.split(' + ');
            for (const leader in armiesObj) {
                if(armiesObj[leader].hasOwnProperty(armyName)){
                    armiesObj[leader][armyName] += Number(armyCount);
                    armiesTotals[leader]+=Number(armyCount);
                }
            }
        } else if (line.includes('defeated')){
            let leader = line.split(' defeated')[0];
            if(armiesObj.hasOwnProperty(leader)){
                delete armiesObj[leader];
                delete armiesTotals[leader];
            } 
        }      
    }
    

    //sorting

        leaderEntries = Object.entries(armiesTotals);
        leaderEntries.sort((a,b)=> b[1]-a[1]);
        
        for (let [leader, armyCount] of leaderEntries){
            console.log((`${leader}: ${armyCount}`));

            let armiesEntries = Object.entries(armiesObj[leader]); //[armyName, armyCount]
            armiesEntries.sort((a,b) => b[1] - a[1]);
            for (const [army, singleArmyCount] of armiesEntries) {
                console.log(`>>> ${army} - ${singleArmyCount}`);
            }
            
        }

    
}

// armies(['Rick Burr arrives', 'Fergus: Wexamp, 30245', 'Rick Burr: Juard, 50000', 'Findlay arrives', 'Findlay: Britox, 34540', 'Wexamp + 6000', 'Juard + 1350', 'Britox + 4500', 'Porter arrives', 'Porter: Legion, 55000', 'Legion + 302', 'Rick Burr defeated', 'Porter: Retix, 3205']);

armies(['Rick Burr arrives', 'Findlay arrives', 'Rick Burr: Juard, 1500', 'Wexamp arrives', 'Findlay: Wexamp, 34540', 'Wexamp + 340', 'Wexamp: Britox, 1155', 'Wexamp: Juard, 43423']);