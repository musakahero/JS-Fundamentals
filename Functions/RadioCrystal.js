function radioCrystal(thicknessArr){

    let cut = function (thickness){
        return thickness - (thickness/4);
    }

    let lap = function (thickness){
        return thickness*0.2;
    }

    let grind = function (thickness){
        return 20;
    }

    let etch = function (thickness){
        return 2;
    }

    let xray = function (thickness){
        return thickness+1;
    }

    let transAndWash = function (thickness){
        return Math.floor(thickness);
    }
    
    let desiredThickness = thicknessArr[0];
    

    for (let i = 1; i < thicknessArr.length; i++) {

        //count how many times we do each operation
        console.log(`Processing chunk ${thicknessArr[i]} microns`)
        let currentThickness = thicknessArr[i];
        let cutCounter = 0;
        let lapCounter = 0;
        let grindCounter = 0;
        let etchCounter = 0;
        let xrayCounter = 0;

        //until desired thickness - 1 is reached... run
        while(currentThickness>=desiredThickness-1){
            let highestReductionFunc;
            
            //if desiredThickness-1 reached -> run xray to reach desiredThickness
            if(currentThickness == desiredThickness-1){
                currentThickness = xray(currentThickness);
                xrayCounter++;
                break;

            //if desiredThickness reached -> break
            } else if(currentThickness==desiredThickness){
                break;

                //desiredThickness not reached and not fixable by xray -> run other operations
            } else {

                //check reductions and compare
            let currentReduction = 0;
            let highestReduction = 0;
            

            currentReduction = cut(currentThickness);
            if (currentReduction > highestReduction 
                && (currentThickness-currentReduction) >= desiredThickness-1) {
                highestReduction = currentReduction;
                highestReductionFunc = cut;
            }

            currentReduction = lap(currentThickness);
            if (currentReduction > highestReduction 
                && (currentThickness-currentReduction) >= desiredThickness-1){
                highestReduction = currentReduction;
                highestReductionFunc = lap;
            }

            currentReduction = grind(currentThickness);
            if (currentReduction > highestReduction 
                && (currentThickness-currentReduction) >= desiredThickness-1){
                highestReduction = currentReduction;
                highestReductionFunc = grind;
            }

            currentReduction = etch(currentThickness);
            if (currentReduction > highestReduction 
                && (currentThickness-currentReduction) >= desiredThickness-1){
                highestReduction = currentReduction;
                highestReductionFunc = etch;
            }
            
            //log the change in counter
            switch(highestReductionFunc){
                case cut:
                cutCounter++;
                    break;
                case lap:
                    lapCounter++;
                    break;
                case grind:
                    grindCounter++;
                    break;
                case etch:
                    etchCounter++;
                    break;
            }
            }

            //work the crystal
            currentThickness -= highestReductionFunc(currentThickness);
            currentThickness = transAndWash(currentThickness);
        
        }

        if(cutCounter>0){
            console.log(`Cut x${cutCounter}`)
            console.log("Transporting and washing");
        }
        
    
        if(lapCounter>0){
            console.log(`Lap x${lapCounter}`);
            console.log("Transporting and washing");
        }
        
    
        if(grindCounter>0){
            console.log(`Grind x${grindCounter}`);
            console.log("Transporting and washing");
        }
        
    
        if(etchCounter>0){
            console.log(`Etch x${etchCounter}`);
            console.log("Transporting and washing");
        }
        
    
        if(xrayCounter>0){
            console.log(`X-ray x${xrayCounter}`);
        }
        
        console.log(`Finished crystal ${desiredThickness} microns`);
    }
    

    

}

//radioCrystal([1375,50000]);
//radioCrystal([1000,4000,8100]);