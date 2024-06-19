function processData(data) {
    return new Promise((resolve, reject) => {
      if (typeof data !== 'number') {
        reject(new Error('Error'));
      } else {
        setTimeout(() => {
          if (data % 2 === 0) {
            resolve('Even');
          } else {
            resolve('Odd');
          }
        }, data % 2 === 0 ? 2000 : 1000);
      }
    });
  }
  
  processData(5)
    .then((result) => console.log(result)) // Вывод: Odd
    .catch((error) => console.error(error));
  
  processData(4)
    .then((result) => console.log(result)) // Вывод: Even
    .catch((error) => console.error(error));
  
  processData('not a number')
    .then((result) => console.log(result))
    .catch((error) => console.error(error.message)); // Вывод: Error