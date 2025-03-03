const leapYears = function(inYear) {
    if(inYear%4==0){
        if(inYear%100==0){
            if(inYear%400==0) return true;
            else return false;
        }
        else return true;
    }
    else return false;
};

//leapYears(1996);

// Do not edit below this line
module.exports = leapYears;
