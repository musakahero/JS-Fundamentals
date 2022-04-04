function logger(input){
    let chatLog = [];
    for(let i = 0; i < input.length; i++){
        let commandArray = input[i].split(" ");
        let command = commandArray[0];

        if(command!="end"){
            switch(command){
                case "Chat":
                    let messageToAdd = commandArray[1];
                    chat(chatLog, messageToAdd);
                break;

                case "Delete":
                    let messageToDel = commandArray[1];
                    deleteMsg(chatLog,messageToDel);
                break;

                case "Edit":
                    let messageToEdit = commandArray[1];
                    let updatedMsg = commandArray[2];
                    editMsg(chatLog,messageToEdit,updatedMsg); 
                break;

                case "Pin":
                    let messageToPin = commandArray[1];
                    pin(chatLog,messageToPin);
                break;

                case "Spam":
                
                    for(let j = 1; j<commandArray.length; j++){
                        let messageToMove = commandArray[j];
                        // let spliced = commandArray.splice(j,1);
                        chatLog.push(messageToMove);
                    }
                break;
            }

        } else {
            for (let k = 0; k<chatLog.length; k++){
                console.log(chatLog[k]);
            }
            break;
        }

    }


    function chat(chatlog, message){
        chatlog.push(message);
    }
    function deleteMsg(chatlog,message){
        if(chatlog.includes(message)){
            let indexToDel = chatlog.indexOf(message); 
            chatlog.splice(indexToDel,1);
        }
    }
    function editMsg(chatlog,message,editedVersion){
        if (chatlog.includes(message)){
            let indexToUpdate = chatlog.indexOf(message);
            chatlog.splice(indexToUpdate,1,editedVersion);
        }
    }
    function pin(chatlog, message){
        if(chatlog.includes(message)){
            let indexToFind = chatlog.indexOf(message);
            let spliced = chatlog.splice(indexToFind,1);
            chatlog.push(spliced[0]);
        }
    }
}



// logger(["Chat Hello",
// "Chat darling",
// "Edit darling Darling",
// "Spam how are you",
// "Delete Darling",
// "end"]);

// logger(["Chat Hello",
// "Delete John",
// "Pin Hi",
// "end"]);

// logger(["Chat John",
// "Spam Let's go to the zoo",
// "Edit zoo cinema",
// "Chat tonight",
// "Pin John",
// "end"]);
