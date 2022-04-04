function solve(input){
    let half1 = input.substring(0,input.length/2);
    let half2 = input.substring(input.length/2, input.length);

    console.log(half1.split('').reverse().join(''));
    console.log(half2.split('').reverse().join(''));
}

solve('tluciffiDsIsihTgnizamAoSsIsihT');
solve('sihToDtnaCuoYteBIboJsihTtAdooGoSmI');