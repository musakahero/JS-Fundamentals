function legendaryFarming(input){
    /*
    •	"Shadowmourne" – requires 250 Shards
    •	"Valanyr" – requires 250 Fragments
    •	"Dragonwrath" – requires 250 Motes */

    //let keyMaterials = ['shards', 'fragments', 'motes'];
    let resourceTracker = {};

    let tokens = input.split(' ').map(x => x.toLowerCase());

    //fill the resourceTracker object
    for(i = 1; i < tokens.length; i+=2){
        resourceTracker[tokens[i]] = [0, false]; //[qty, isKeyMat]
        if(tokens[i]=='shards' 
        || tokens[i]=='fragments' 
        || tokens[i]=='motes'){
            resourceTracker[tokens[i]][1] = true;
        }
    }
    if(!resourceTracker.hasOwnProperty('shards')){
        resourceTracker['shards'] = [0, true];
    }
    if(!resourceTracker.hasOwnProperty('fragments')){
        resourceTracker['fragments'] = [0, true];
    }
    if(!resourceTracker.hasOwnProperty('motes')){
        resourceTracker['motes'] = [0, true];
    }
    //let indexToRemember = 0;
    for(j = 0; j < tokens.length; j+=2){        
        
        resourceTracker[tokens[j+1]][0] += Number(tokens[j]);

        if(resourceTracker[tokens[j+1]][0] >= 250){
            if(tokens[j+1]=='shards'){
                console.log('Shadowmourne obtained!');
                resourceTracker[tokens[j+1]][0] -= 250;
                break;
            } else if(tokens[j+1]=='fragments'){
                console.log('Valanyr obtained!');
                resourceTracker[tokens[j+1]][0] -= 250;
                break;
            } else if(tokens[j+1]=='motes'){
                console.log('Dragonwrath obtained!');
                resourceTracker[tokens[j+1]][0] -= 250;
                break;
            }            
        }
    }

    for (const resource in resourceTracker) {
        if (resourceTracker[resource][0] == 0 && resourceTracker[resource][1] == false){
            delete resourceTracker[resource];
        }
    }

    let ResEntries = Object.entries(resourceTracker); 
    //[resource, [qty, isKey]]
    let junkEntries = [];
    for (let i = 0; i < ResEntries.length; i++) {
        if(ResEntries[i][1][1] != true){
            junkEntries.push(ResEntries[i]);
            ResEntries.splice(ResEntries.indexOf(ResEntries[i]),1);
            i-=1;
        }
    }
    
    //sort & print the key mats
    ResEntries.sort((a,b) => {

        if( b[1][0] === a[1][0]){
            return a[0].localeCompare(b[0]);
        }
        return b[1][0]-a[1][0];
    });
    for (const item of ResEntries) {
        console.log(`${item[0]}: ${item[1][0]}`);
    }

    //sort & print the junk mats
    junkEntries.sort((a,b)=> a[0].localeCompare(b[0]));
    for (const item of junkEntries) {
        console.log(`${item[0]}: ${item[1][0]}`);
    }


    //console.log(resourceTracker);
}

legendaryFarming('3 Motes 5 stones 5 Shards 6 leathers 255 fragments 7 Shards');

console.log('----------------');

legendaryFarming('123 silver 6 shards 8 shards 5 motes 9 fangs 75 motes 103 MOTES 8 Shards 86 Motes 7 stones 19 silver');