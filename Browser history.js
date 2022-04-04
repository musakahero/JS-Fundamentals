function history(obj, input){
    
    for (const cmdLine of input) {
        let cmd = cmdLine.split(" ")[0];
        

        if(cmd == 'Open') {
            let appName = cmdLine.split("Open ")[1];
            obj['Open Tabs'].push(appName);
            obj['Browser Logs'].push(cmdLine);

        } else if(cmd == 'Close'){
            let appName = cmdLine.split("Close ")[1];

            if(obj['Open Tabs'].includes(appName)){
                let indexToRemove = obj['Open Tabs'].indexOf(appName);
                obj['Open Tabs'].splice(indexToRemove,1);
                obj['Browser Logs'].push(cmdLine);
                obj['Recently Closed'].push(appName);
            }
            
        } else {
            obj['Open Tabs'].splice(0,(obj['Open Tabs'].length));
            obj['Browser Logs'].splice(0,(obj['Browser Logs'].length));
            obj['Recently Closed'].splice(0,(obj['Recently Closed'].length));            
        }
    }

    console.log(`${obj['Browser Name']}`);
    console.log(`Open Tabs: ${obj['Open Tabs'].join(', ')}`);
    console.log(`Recently Closed: ${obj['Recently Closed'].join(', ')}`);
    console.log(`Browser Logs: ${obj['Browser Logs'].join(', ')}`);
}

// history({"Browser Name":"Google Chrome","Open Tabs":["Facebook","YouTube","Google Translate"],
// "Recently Closed":["Yahoo","Gmail"],
// "Browser Logs":["Open YouTube","Open Yahoo","Open Google Translate","Close Yahoo","Open Gmail","Close Gmail","Open Facebook"]},
// ["Close Facebook", "Open StackOverFlow", "Open Google"]);

history({"Browser Name":"Mozilla Firefox",
"Open Tabs":["YouTube"],
"Recently Closed":["Gmail", "Dropbox"],
"Browser Logs":["Open Gmail", "Close Gmail", "Open Dropbox", "Open YouTube", "Close Dropbox"]},
["Open Wikipedia", "Clear History and Cache", "Open Twitter"]
);