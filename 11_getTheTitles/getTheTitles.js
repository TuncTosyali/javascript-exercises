const getTheTitles = function(inArray) {
    const titleArray=[];
    inArray.forEach(element => {
        titleArray.push(element.title);
    });
    return titleArray;
};

// Do not edit below this line
module.exports = getTheTitles;
