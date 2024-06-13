const repeatString = function(word, times) {
    let stringToRepeat = "";
    if (times < 0) {
        return "ERROR";
    } else {
        for (let i = 0; i < times; i++) {
            stringToRepeat += word;
        }
        return stringToRepeat;
    }
};

// Do not edit below this line
module.exports = repeatString;