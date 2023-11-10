const palindromes = function (potentialPalindrome) {
    let signs = [' ', '.', ',', '!', '?'];
    let cleanedPalindrome;
    let variable = potentialPalindrome.toLowerCase();
    for (let sign of signs) {
        cleanedPalindrome = variable.split(sign).join('');
        variable = cleanedPalindrome;
    }

    return cleanedPalindrome === cleanedPalindrome.split('').reverse().join('');
};

// Do not edit below this line
module.exports = palindromes;
