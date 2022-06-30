module.exports = function toReadable (number) {
    let numbers = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    let numbersDecimaltoNineteen = ['ten','eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    let numbersDecimaltoNinety = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    let hundred;
    let dozen;
    let unit;
    ///Input is 0
    if (number == 0) {
       return 'zero';
    }

    ///Input is 1-9
    else if (number < 10) {
        return numbers[number - 1];
    }

    ///Input is 10-19
    else if (number >= 10 && number < 20) {
        return numbersDecimaltoNineteen[number - 10];
    }

    ///Input is 20-99
    if (number >= 20 && number < 100) {
        dozen = Math.floor(number / 10);
        unit = number % 10;

        ///Second digit isn't 0
        if (number % 10 !== 0) {
            return numbersDecimaltoNinety[dozen - 2] + ' ' + numbers[unit - 1];
        }

        ///Second digit is 0
        else {
            return numbersDecimaltoNinety[dozen - 2];
        } 
    }

    ///Input is 100-999
    if (number >= 100 && number < 1000) {
        hundred = Math.floor(number / 100);
        dozen = Math.floor(number / 10) % 10;
        unit = number % 10;

        ///Third digit is 0
        if (number % 10 === 0) {
            ///Input ends with 10
            if (number % 100 === 10) {
                return numbers[hundred - 1] + ' ' + 'hundred' + ' ' + numbersDecimaltoNineteen[0];
            }

            ///Input ends with 00
            else if (number % 100 === 0) {
                return numbers[hundred - 1] + ' ' + 'hundred';
            }

            ///Input ends with 0
            else {
                return numbers[hundred - 1] + ' ' + 'hundred' + ' ' + numbersDecimaltoNinety[dozen - 2];
            }
        }

        ///Second digit is 0
        else if (dozen === 0) {
            return numbers[hundred - 1] + ' ' + 'hundred' + ' ' + numbers[unit - 1];
        }

        ///Second digit is 1
        else if (number % 100 >= 10 && number % 100 < 20) {
            return numbers[hundred - 1] + ' ' + 'hundred' + ' '+ numbersDecimaltoNineteen[unit];
        }

        ///Any other input
        else{
            return numbers[hundred - 1] + ' ' + 'hundred' + ' ' + numbersDecimaltoNinety[dozen - 2] + ' ' + numbers[unit - 1];
        }
    }
}
