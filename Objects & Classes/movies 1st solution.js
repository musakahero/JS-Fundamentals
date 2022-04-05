function movies(input){
    let listOfMovies = [];
    for (const lines of input) {
        if(lines.includes("addMovie")){
            let nameOfMovie = lines.split("addMovie ")[1];
            listOfMovies.push({name:nameOfMovie});

        } else if(lines.includes("directedBy")){           
            let info = lines.split(" directedBy ");
            let name = info[0];
            let director = info[1];
            
            for (let movie of listOfMovies) {
                if (movie.name === name){
                    movie.director = director;
                }
            }
            

        } else if (lines.includes("onDate")){
            let info = lines.split(" onDate ");
            let name = info[0];
            let date = info[1];
            for (let movie of listOfMovies) {
                if (movie.name === name){
                    movie.date = date;
                }
            }
        
        }
    }
    for (const movie of listOfMovies) {
        if(movie.name && movie.director && movie.date){
            console.log(JSON.stringify(movie));
        }
        
    }
}

movies([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
    ]
    );

// movies([
//     'addMovie The Avengers',
//     'addMovie Superman',
//     'The Avengers directedBy Anthony Russo',
//     'The Avengers onDate 30.07.2010',
//     'Captain America onDate 30.07.2010',
//     'Captain America directedBy Joe Russo'
//     ]
//     );