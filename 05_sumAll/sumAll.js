const sumAll = function (inSmallerNum, inLargerNum) {
    if (!Number.isInteger(inSmallerNum) || !Number.isInteger(inLargerNum)) return "ERROR";
    if (inSmallerNum < 0 || inLargerNum < 0) return "ERROR";
    //rotate parameter between each other if they are provided in wrong order
    if(inSmallerNum > inLargerNum){
        let temp=inSmallerNum;
        inSmallerNum=inLargerNum;
        inLargerNum=temp;
    }//---------------------------
    let toBeReturned=0;
    for(let i=inSmallerNum; i<=inLargerNum;i++){
        toBeReturned+=i;
    }
    return toBeReturned;
};

// Do not edit below this line
module.exports = sumAll;
