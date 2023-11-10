const getTheTitles = function(arrayBooks) {
    let arrayTitles = []
    for (let book of arrayBooks) {
        arrayTitles.push(book['title']);
    }

    return arrayTitles;
};

// Do not edit below this line
module.exports = getTheTitles;
