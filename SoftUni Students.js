/*
obj courses {}
    -courseName: {}
        -capacity: integer
        -studentsList: [     ]
            -includes objects - student {}
                -username: string
                -email: string
                -credits: integer
                
count of students = studentsList.length
*/

function solve(input){
    let coursesObj = {};
    let coursesStudentCount = {};
    //1. read input
    for (const line of input) {
        if(line.includes(": ")){ //add course with capacity; if course exists - add capacity to existing course
            let [courseName, courseCapacityStr] = line.split(': ');
            let courseCapacity = Number(courseCapacityStr);

            if(!coursesObj.hasOwnProperty(courseName)){
                coursesObj[courseName] = {'capacity':courseCapacity, 'studentList':[]};
            } else {
                coursesObj[courseName]['capacity']+= courseCapacity;
            }
            

        } else { //add the students if courseName exists && if countOfStudents < course capacity; 
            let userAndCredits = line.split(' with')[0];
            let [user, creditsAndBracket] = userAndCredits.split('[');
            let userCredits = Number(creditsAndBracket.split(']')[0]);

            let userEmailandCourseName = line.split('email ')[1];
            let [userEmail, courseName] = userEmailandCourseName.split(' joins ');
            
            if (coursesObj.hasOwnProperty(courseName)){

                if (coursesObj[courseName]['capacity'] > 0){
                    //TODO: add student
                    coursesObj[courseName]['studentList'].push( 
                        {
                        'username':user, 
                        'email':userEmail, 
                        'credits':userCredits 
                    } );

                    coursesObj[courseName]['capacity']--;
                }
            }
        }
    }
    //2. Sort the courses by studentList.length in descending  
    for (const courseName in coursesObj) {
        coursesStudentCount[courseName] = coursesObj[courseName]['studentList'].length;
    }
    let sortedCourses = Object.entries(coursesStudentCount); 
    //[[courseName, countOfStud]...]
    sortedCourses.sort((a,b) => b[1] - a[1]);

    for (const [courseName,courseObj] of sortedCourses) {
        console.log(`${courseName}: ${coursesObj[courseName]['capacity']} places left`);

        let sortedStudents = coursesObj[courseName]['studentList'].sort((a,b) => b['credits']-a['credits']);

        for (const student of sortedStudents) {
            console.log(`--- ${student.credits}: ${student.username}, ${student.email}`);
        }
    }
    
    
}

solve(['JavaBasics: 2', 'user1[25] with email user1@user.com joins C#Basics', 'C#Advanced: 3', 'JSCore: 4', 'user2[30] with email user2@user.com joins C#Basics', 'user13[50] with email user13@user.com joins JSCore', 'user1[25] with email user1@user.com joins JSCore', 'user8[18] with email user8@user.com joins C#Advanced', 'user6[85] with email user6@user.com joins JSCore', 'JSCore: 2', 'user11[3] with email user11@user.com joins JavaBasics', 'user45[105] with email user45@user.com joins JSCore', 'user007[20] with email user007@user.com joins JSCore', 'user700[29] with email user700@user.com joins JSCore', 'user900[88] with email user900@user.com joins JSCore']);

console.log('---------------');

solve(['JavaBasics: 15',
'user1[26] with email user1@user.com joins JavaBasics',
'user2[36] with email user11@user.com joins JavaBasics',
'JavaBasics: 5',
'C#Advanced: 5',
'user1[26] with email user1@user.com joins C#Advanced',
'user2[36] with email user11@user.com joins C#Advanced',
'user3[6] with email user3@user.com joins C#Advanced',
'C#Advanced: 1',
'JSCore: 8',
'user23[62] with email user23@user.com joins JSCore']
);