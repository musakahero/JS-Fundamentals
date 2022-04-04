function shoppingList (input){
    let groceries = input[0].split("!");

    for (let i = 0; i < input.length; i++){

        let [command,item,newItem] = input[i].split(' ');

        //if command is not "Go..." => check operation and perform
        if (command!="Go"){
            let indexOfTheItem = 0;
            switch(command){
                case "Urgent":
                    if(groceries.includes(item)==false){ //if not included on the list...
                        groceries.unshift(item);
                    }
                break;
    
                case "Unnecessary": //if included on the list
                    if(groceries.includes(item)){
                        indexOfTheItem = groceries.indexOf(item);
                        groceries.splice(indexOfTheItem,1);
                    }
                break;
    
                case "Correct":
                    if(groceries.includes(item)){ //if included on the list
                        indexOfTheItem = groceries.indexOf(item);
                        groceries[indexOfTheItem]=newItem;
                    }
                break;
    
                case "Rearrange":
                    if(groceries.includes(item)){ //if included on the list
                        indexOfTheItem = groceries.indexOf(item);
                        groceries.splice(indexOfTheItem,1);
                        groceries.push(item);
                    }
                break;
            }

            //if cmd is "Go..." end the print results
        }else {
            console.log(groceries.join(", "));
            break;
        }
        

    }



}

// shoppingList(["Tomatoes!Potatoes!Bread",
// "Unnecessary Milk",
// "Urgent Tomatoes",
// "Go Shopping!"]);

shoppingList(["Milk!Pepper!Salt!Water!Banana",
"Urgent Salt",
"Unnecessary Grapes",
"Correct Pepper Onion",
"Rearrange Grapes",
"Correct Tomatoes Potatoes",
"Go Shopping!"]);
