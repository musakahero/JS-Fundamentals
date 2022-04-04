function arenaTier(input){
    let gladiatorList = {};
    let gladiatorTotalSkillLog = {};

    for (const line of input) {
        
        if(line != 'Ave Cesar'){
            let tokens = line.split(' ');
            if(tokens.includes('->')){ //is this a gladiator descr?
                let gladiator = tokens[0];
                let technique = tokens[2];
                let skill = Number(tokens[4]);
                let totalSkill = 0;

                //if glad doesn't exist = add him and his tech and skill
                if(!gladiatorList.hasOwnProperty(gladiator)){ 
                    gladiatorList[gladiator] = {[technique]:skill};
                } 
                // if glad doesn't have this tech = add it and its skill level
                if(!gladiatorList[gladiator].hasOwnProperty(technique)){ 
                    gladiatorList[gladiator][technique] = skill;
                } else{
                    //if glad exists, tech exists, compare. If input skill is higher - save input skill
                    if(gladiatorList[gladiator][technique] < skill){
                        gladiatorList[gladiator][technique] = skill;
                    }
                }

                for (const skillScore of Object.values(gladiatorList[gladiator])) {
                    totalSkill += skillScore;
                }

                gladiatorTotalSkillLog[gladiator] = totalSkill;
            } else { //it's a gladiator fight

                let gladiator1 = tokens[0];
                let gladiator2 = tokens[2];

                if(gladiatorList.hasOwnProperty(gladiator1) && gladiatorList.hasOwnProperty(gladiator2)){
                    let glad1Techs = Object.keys(gladiatorList[gladiator1]);
                    let glad2Techs = Object.keys(gladiatorList[gladiator2]);

                    for (const tech of glad1Techs) {
                        //if glad 2 techs include the current glad1 tech, compare their Total skills
                        if(glad2Techs.includes(tech)){

                            if(gladiatorTotalSkillLog[gladiator1] > gladiatorTotalSkillLog[gladiator2]){
                                delete gladiatorList[gladiator2];
                                delete gladiatorTotalSkillLog[gladiator2];
                            } else if (gladiatorTotalSkillLog[gladiator1] < gladiatorTotalSkillLog[gladiator2]){
                                delete gladiatorList[gladiator1];
                                delete gladiatorTotalSkillLog[gladiator1];
                            }
                            break;
                        }
                    }
                }               
            }
        } else { 
            break;
        }
    }
    //printing

    
    let gladSkillEntries = Object.entries(gladiatorTotalSkillLog); // [glad name, skill]
    let sortedGladsBySkill = gladSkillEntries.sort((a,b) => {
        if(a[1] == b[1] ){
            return a[0].localeCompare(b[0]);
        } else {
            return b[1] - a[1];
        }
        
    });
    
    for (const [key, value] of sortedGladsBySkill) {
        console.log(`${key}: ${gladiatorTotalSkillLog[key]} skill`);

        let gladTechEntries = Object.entries(gladiatorList[key]); //[tech, skill]
        let sortedTechsBySkill = gladTechEntries.sort((a,b) => {
            if(a[1] == b[1] ){
                return a[0].localeCompare(b[0]);
            } else {
                return b[1] - a[1];
            }
        });

        for (const [tech,skill] of sortedTechsBySkill) {
            console.log(`- ${tech} <!> ${skill}`);
        }
    }
}

arenaTier([
    'Peter -> BattleCry -> 400',
    'Alex -> PowerPunch -> 300',
    'Stefan -> Duck -> 200',
    'Stefan -> Tiger -> 250',
    'Ave Cesar'
    ]
    );

    console.log('-----------------')
arenaTier([
    'Peter -> Duck -> 400',
    'Julius -> Shield -> 150',
    'Gladius -> Heal -> 200',
    'Gladius -> Support -> 250',
    'Gladius -> Shield -> 250',
    'Peter vs Gladius',
    'Gladius vs Julius',
    'Gladius vs Maximilian',
    'Ave Cesar'
    ]
    );