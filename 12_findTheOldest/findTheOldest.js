/* const people = [
    {
        name: "Carly",
        yearOfBirth: 1942,
        yearOfDeath: 1970,
    },
    {
        name: "Ray",
        yearOfBirth: 1962,
        yearOfDeath: 2011,
    },
    {
        name: "Jane",
        yearOfBirth: 1912,
        yearOfDeath: 1941,
    },
    {
        name: "Ahmet",
        yearOfBirth: 2018,
    },
    {
        name: "Mehmet",
        yearOfBirth: 1066,
    },
]; */

const findTheOldest = function (inArray) {
    let oldest = inArray[0];
    inArray.forEach((currPerson) => {
        let oldestPersonAge = oldest.yearOfDeath
            ? oldest.yearOfDeath - oldest.yearOfBirth
            : new Date().getFullYear() - oldest.yearOfBirth;
        let currPersonAge = currPerson.yearOfDeath
            ? currPerson.yearOfDeath - currPerson.yearOfBirth
            : new Date().getFullYear() - currPerson.yearOfBirth;
        if (currPersonAge > oldestPersonAge) oldest = currPerson;
    });
    return oldest;
};

//console.log(findTheOldest(people));

// Do not edit below this line
module.exports = findTheOldest;
