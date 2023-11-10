const repeatString = function(ourString, number) {
    let repeated = ''
    if (number >= 0) {
        for (let i = 0; i < number; i++) {
            repeated += ourString;
        }
    } else {
        repeated = 'ERROR';
    }
    return repeated;
    
};



// Do not edit below this line
module.exports = repeatString;
