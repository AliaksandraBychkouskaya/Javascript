/**
 * write function that adds two numbers
 *
 */
function add(a, b) {
    return a+b;
}

/**
 * write function that return first and last name of given object
 * properties firstName and lastName
 * {
 *    firstName: "John"
 *    lastName: "Dou"
 * }
 */
function getFullName(object) {
    return object.firstName + " "+ object.lastName;
}

/**
 * write fuction that checks is number is odd
 * true if odd, false if even
 */
function isOdd(n) {
    return (n % 2 === 0)? false : true;
}

/**
 * write function that return shortest of words in given array
 * e.g ["one", "two", "three"] should return one
 */
function getShortest(wordArray) {
    let minlength = wordArray[0].length;
    let shortString = wordArray[0];
    for (let i of wordArray){
        if (i.length < minlength){
            minlength = i.length;
            shortString = i;
        }
    }
    return shortString;
    
}

/**
 * write function that returns word google with given numbers of "o" symbols
 * e.g getGoogle(5) should return "gooooogle"
 */
function getGoogle(n) {
    return 'g'+'o'.repeat(n)+'gle';
}

/**
 * write function that returns object based on given information (params may be null)
 * getUser("John", "Dou", 42) should return
 * {
 *    firstName: "John"
 *    lastName: "Dou"
 *    age: 42
 * }
 */
function getUser(firstName=null, lastName=null, age=null) {
    return { firstName: firstName, lastName: lastName, age: age};
}

/**
 * write function that calculates total path traveled.
 * path represended as array of objects with field distance and direction
 * e.g [{direction: "Kiyv - Minsk", distance: 567}, {direction: "Kiyv - Paris", distance: 2402}]
 */

function getTotalPath(path) {
    let km = 0;
    for (let i of path)
    {
        km += i.distance;
    }
    return km;
}


module.exports = {
    add,
    getFullName,
    isOdd,
    getShortest,
    getGoogle,
    getUser,
    getTotalPath,
};
