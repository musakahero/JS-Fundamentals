function odd(input){
    let repeatingElements = new Map();
    let elArray = input.split(' ');

    for (const el of elArray) {
        let formattedEl = el.toLowerCase();

        repeatingElements.set(formattedEl,0);
        
        for (const element of elArray) {
            let comparisonElement = element.toLowerCase();

            if(formattedEl == comparisonElement){
                let newValue = repeatingElements.get(formattedEl) + 1;
                repeatingElements.set(formattedEl, newValue);
            }
        }
    }

    let result = [];

    for (const [key, value] of repeatingElements) {
        if(value %2 == 0){
            repeatingElements.delete(key);
        }
        
    }
    
    for (const [key, value] of repeatingElements) {
        result.push(key);
    }
    
    console.log(result.join(' '));

}

odd('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');
odd('Cake IS SWEET is Soft CAKE sweet Food');