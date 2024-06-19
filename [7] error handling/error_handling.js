function handleReferenceError() {
    try {
      // Попытка обращения к неопределенной переменной
      console.log(nonDeclaredVariable);
    } catch (error) {
      if (error instanceof ReferenceError) {
        console.log('ReferenceError: The variable is not defined');
      } else {
        throw error; // Выброс ошибки в случае, если это не refferenceError
      }
    }
  }
  
  handleReferenceError();