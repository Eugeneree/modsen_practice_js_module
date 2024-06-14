function name(numbers){
    let min = null;
    for(let i=0; i<numbers.length; i++) {
        if(min === null)
            min = numbers[i];
        else if(numbers[i] < min) {
            min = numbers[i];
        }
    } return min;
}

console.log(name([-123, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 2]));