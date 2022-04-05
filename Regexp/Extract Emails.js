function solve(input) {
    let pattern = /(?<=\s)[A-Za-z0-9]+[\.\-_]*[A-Za-z0-9]*@[A-Za-z]+(\-[A-Za-z]+)*\.[A-Za-z]+(\-[A-Za-z]+)*(\.[A-Za-z]+)*/g;

    if (pattern.test(input)) {
        let matches = input.match(pattern);

        for (const match of matches) {
            console.log(match);
        }
    }

}
solve('Please contact us at: support@github.com.');
console.log('----------------');
solve('Just send email to s.miller@mit.edu and j.hopking@york.ac.uk for more information.');
console.log('----------------');
solve('Many users @ SoftUni confuse email addresses. We @ Softuni.BG provide high-quality training @ home or @ class. –- steve.parker@softuni.de.');



/*
(?<=\s) = positive lookbehind
[A-Za-z0-9]+[\.\-_]*[A-Za-z0-9]*  = username pattern
@
[A-Za-z]+(\-[A-Za-z]+)*\.[A-Za-z]+(\-[A-Za-z]+)* = host at least two words separated by dot can have hyphen between letters
(\.[A-Za-z]+)* = possible another dot and word
*/