function bombNums(arrOfNums,bombNumberAndPower){

let bombNum = bombNumberAndPower[0];
let power = bombNumberAndPower[1];

//cut right part -> reverse -> cut left part + bombNum -> reverse | do this until there's still a bombNum within the array

while (arrOfNums.includes(bombNum)){
	arrOfNums.splice(arrOfNums.indexOf(bombNum)+1, power);
	arrOfNums.reverse();
	arrOfNums.splice(arrOfNums.indexOf(bombNum), power+1)
	arrOfNums.reverse();
}

let sum = 0;
arrOfNums.map(x => sum=sum+x);
console.log(sum);

}

bombNums([1, 2, 2, 4, 2, 2, 2, 9],[4, 2]);
bombNums([1, 4, 4, 2, 8, 9, 1],[9, 3]);
bombNums([1, 7, 7, 1, 2, 3],[7, 1])
bombNums([1, 1, 2, 1, 1, 1, 2, 1, 1, 1], [2, 1]);
