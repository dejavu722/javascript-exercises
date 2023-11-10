function isNumber(value) {
    return typeof value === 'number';
  }

const sumAll = function(numberBegin=Number, numberEnd=Number) {
        let sum = 0;
        let burnerValuable = 0;

        if (numberBegin > 0 && numberEnd >  0 && isNumber(numberBegin) && isNumber(numberEnd)) {
            if (numberBegin > numberEnd) {
                burnerValuable = numberBegin;
                numberBegin = numberEnd;
                numberEnd = burnerValuable; 
            }

            for(let i=numberBegin; i<=numberEnd; i++) {
                sum += i;
            }
        return sum;
    } else {
        return 'ERROR';
    }
    
}


// Do not edit below this line
module.exports = sumAll;
