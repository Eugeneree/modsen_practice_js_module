async function fetchAndProcessData(url) {
    // блок обработки ошибок
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      return data;
    } catch (error) {
      return `Error: ${error.message}`;
    }
  }
  
 
  fetchAndProcessData('https://api.example.com/data')
    .then(data => console.log(data))
    .catch(error => console.error(error));