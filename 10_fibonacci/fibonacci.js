const fibonacci = function (inNum) {
    let realNum = Number(inNum);
    if (!Number.isInteger(realNum) || !(realNum >= 0)) return "OOPS";
    if (realNum === 0){
        return 0;
    } else if(realNum === 1){
        return 1;
    } else {
        return fibonacci(realNum - 1) + fibonacci(realNum - 2);
    }
};

console.log(fibonacci(4));
//console.log(Number.isInteger(-25));


// Do not edit below this line
module.exports = fibonacci;
