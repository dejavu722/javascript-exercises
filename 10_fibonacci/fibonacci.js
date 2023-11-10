const fibonacci = function(rawPosition) {
    let firstMember = 1;
    let secondMember = 1;
    let thirdMember;
    let variable;
    position = Number(rawPosition);
    if (position <= 0) {
        return 'OOPS';
    }

    for (let i=0; i<position-2; i++) {
        thirdMember = firstMember + secondMember;
        firstMember = secondMember;
        secondMember = thirdMember;
    }

    return secondMember;

//     to take the 1 and the 2 number and add them together to get number 3
//      now number 2 is number 1, number 3 is number 2
//      repeat
// 
//     
};

// Do not edit below this line
module.exports = fibonacci;
