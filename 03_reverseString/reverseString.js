const reverseString = function (inStr) {
    let outStr = "";
    for (let i = 1; inStr.length - i >= 0; i++) {
        outStr += inStr.at(inStr.length - i);
    }
    //console.log(outStr);
    return outStr;
};

//reverseString("123");

// Do not edit below this line
module.exports = reverseString;
