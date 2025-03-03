const removeFromArray = function (inArray, ...toBeRemoved) {
    let outArray = [];
    let clearFlag = true;
    for (let i = 0; i < inArray.length; i++) {
        for (let r = 0; r < toBeRemoved.length; r++) {
            if (inArray.at(i) === toBeRemoved.at(r)) {
                clearFlag = false;
            }
        }
        if (clearFlag) {
            outArray.push(inArray.at(i));
        }
        else {
            clearFlag = true;
        }
    }
    return outArray;
    //console.log("myline");
};

//removeFromArray();

// Do not edit below this line
module.exports = removeFromArray;
