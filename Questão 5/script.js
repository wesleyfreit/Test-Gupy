const string = 'roma';

function convert(str) {
    let newStr = '';

    for(let i = str.length-1; i >= 0; i--){
        newStr += str[i];
    }

    return newStr;
}

console.log(convert(string));

