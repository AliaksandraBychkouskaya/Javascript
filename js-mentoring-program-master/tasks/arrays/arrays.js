/**
 * return an array of characters names
 * @param {Array} chars
 * @return {Array} - char names
 */
function getCharactersNames(chars) {
    let arr = [];
    for (let i in chars){
        arr.push(chars[i].name);
    }
    console.log (arr);
    return arr;
}

/**
 * print (console.log) ids of all characters
 * @param {Array} chars
 */
function printCharacterNames(chars) {
    for (let i in chars){
        console.log(chars[i].name);
    }

}

/**
 * return an array of non-human characters
 * @param {Array} chars
 * @return {Array} - non human characters
 */
function getNonHumanCharacters(chars) {
    let arr = [];
    for (let i in chars){
        if (chars[i].species !== "Human") {
            arr.push(chars[i]);
        }
    }
    return arr;
}

/**
 * return info about character named 'Jerry Smith'
 * @param {Array} chars
 * @return {Object} - Jerry object
 */
function getJerryInfo(chars) {
    for (let i in chars){
        if (chars[i].name === "Jerry Smith")
        return chars[i];
    }
}

/**
 * check if all characters are human. return true if all, false if not
 * @param {Array} chars
 * @return {boolean}
 */
function isAllHuman(chars) {
    for ( let i in chars) {
        if (chars[i].species !== "Human")
        return false;
    }
    return true;
}

/**
 * check if there are any Fish-Person characters. return true if any, false if not
 * @param {Array} chars
 * @return {boolean}
 */
function isAnyFishPerson(chars) {
    for ( let i in chars) {

        if (chars[i].type === "Fish-Person")
        return true;
    }
    return false;
}

/**
 * 1. Write a method to find an index of minimal item from an array;
 * @param {Array} arr
 * @return {number} - minimum element index
 */
function minItem(arr) {
    //PLACE YOUR CODE HERE
    let min = arr[0];
    let minindex = 0;
    for (let i in arr){
        if (arr[i] < min){
            minindex = i;
            min = arr [i];
        }
    }
    return minindex;
}

module.exports = {
    getCharactersNames,
    printCharacterNames,
    getNonHumanCharacters,
    getJerryInfo,
    isAllHuman,
    isAnyFishPerson,
    minItem
};
