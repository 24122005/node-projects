let coremodule = {
    primeNum : function isPrime(num) {
        if (num <= 1) return false;
        if (num === 2) return true;
        if (num % 2 === 0) return false;
        for (let i = 3; i <= Math.sqrt(num); i += 2) {
            if (num % i === 0) return false;
        }
        return true;
    },

    addition : function sumOfDigits(number) {
    let sum = 0;
    while (number) {
        sum += number % 10;
        number = Math.floor(number / 10);
    }
    return sum;
    },

    vowels : function findVowels(str) {
        const vowels = 'aeiouAEIOU';
        let vowelCount = 0;
        for (let char of str) {
            if (vowels.includes(char)) {
                vowelCount++;
        }
    }
    return vowelCount;
    }

}
module.exports = coremodule