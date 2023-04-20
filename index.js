// Code your solution here

function findMatching(array, string) {
    return array.filter(driver => driver.toLowerCase() === string.toLowerCase())
}

function fuzzyMatch(array, letters) {
    return array.filter(driver => driver.toLowerCase().indexOf(letters.toLowerCase()) === 0)
}

function matchName(array, string) {
    return array.filter(driver => driver.name === string)
}