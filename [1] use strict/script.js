'use strict';

function stringToArray (str) {
    const wordsArray = str.split(' ');
    return wordsArray;
}

let words = stringToArray("hello world");

console.log(words);