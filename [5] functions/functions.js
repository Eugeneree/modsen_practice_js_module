function findFirstUniqueChar(s) {
    let charCount = {}; // создаем объект
    for (let char of s) { // проходим по каждому символу строки
        if (charCount[char]) { // если свойство объекта есть, то его счетчик прибавляется
            charCount[char]++; 
        } else {
            charCount[char] = 1; // иначе создается свойство со счетчиком равным 1
        }
    }

    for (let char of s) { // проходим по каждому символу строки
        if (charCount[char] === 1) { // первое свойство, которое имеет счетчик  1 является превым неповторяющимся символом
            return char;
        }
    }

    return null;
}

console.log(findFirstUniqueChar('sadfafdasdfafsrqewfeqwrqrefh'));