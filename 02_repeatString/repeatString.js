const repeatString = function(str, count) {
    let finalstr='';
    if(count < 0){
        return "ERROR";
    }
    for(let i=0; i<count; i++){
        finalstr+=str;
    }
    return finalstr;
};

// Do not edit below this line
module.exports = repeatString;
