function register(inputArr){

    let rawData = [];
    let nextYear = {};

    for (const line of inputArr) {
        //"Student name: Mark   ,     Grade: 8     ,    Graduated with an average score: 4.75"
        let tokens = line.split(', ');
        let studentName = tokens[0].split("name: ")[1];
        let studentGrade = Number(tokens[1].split("Grade: ")[1]);
        let studentScore = Number(tokens[2].split(" score: ")[1]).toFixed(2);
        
        if(studentScore>=3){
            rawData.push({'studentName':studentName, 'grade':studentGrade+1, 'score':studentScore});
            rawData.sort((a,b) => a.grade - b.grade);
        }       
    }

    //create grades
    for (const student of rawData) {
        if(Number(student.score)>3){
            nextYear[student.grade] = {};
        } 
               
    }
    //list people under the grade
    for (const grade of Object.keys(nextYear)) {
        let sortedNamesArr = [];
        let sortedScoresArr = [];

        //fill the sortedNamesArr
        for (const student of rawData) {
            if(student.grade == grade){
                sortedNamesArr.push(student.studentName);
                sortedScoresArr.push(student.score);
            }    
        }

        //find average
        let sumOfAll = 0;
        sortedScoresArr.map(x => sumOfAll=sumOfAll+Number(x));
        let averageScore = (sumOfAll/sortedScoresArr.length).toFixed(2);

        nextYear[grade] = {'listOfStudents':sortedNamesArr, 'average':averageScore};
    }

 
    
    for (const grade of Object.keys(nextYear)) {
        console.log(`${grade} Grade \nList of students: ${nextYear[grade].listOfStudents.join(', ')}\nAverage annual grade from last year: ${nextYear[grade].average}\n`)
    }
    
}


register([
    "Student name: Mark, Grade: 8, Graduated with an average score: 4.75",
        "Student name: Ethan, Grade: 9, Graduated with an average score: 5.66",
        "Student name: George, Grade: 8, Graduated with an average score: 2.83",
        "Student name: Steven, Grade: 10, Graduated with an average score: 4.20",
        "Student name: Joey, Grade: 9, Graduated with an average score: 4.90",
        "Student name: Angus, Grade: 11, Graduated with an average score: 2.90",
        "Student name: Bob, Grade: 11, Graduated with an average score: 5.15",
        "Student name: Daryl, Grade: 8, Graduated with an average score: 5.95",
        "Student name: Bill, Grade: 9, Graduated with an average score: 6.00",
        "Student name: Philip, Grade: 10, Graduated with an average score: 5.05",
        "Student name: Peter, Grade: 11, Graduated with an average score: 4.88",
        "Student name: Gavin, Grade: 10, Graduated with an average score: 4.00"
    ]    
)