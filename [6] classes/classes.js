class University {
    constructor(universityName) { // конструктор
        this.universityName = universityName; // свойство класса имя университета
        this.faculties = []; // свойство класса названия факультетов (массив)
    }

    addFaculty(facultyName) { // метод добавления факультета
        this.faculties.push(facultyName);
    }

    removeFaculty(facultyName) { // метод удаления факультета по имени
        const index = this.faculties.indexOf(facultyName);
        if (index !== -1) {
            this.faculties.splice(index, 1); // удаляет элемент по индексу
        }
    }

    displayFaculties() { // вывод всех факультетов
        console.log(`Faculties of ${this.universityName}:`);
        this.faculties.forEach((faculty, index) => {
            console.log(`${index + 1}. ${faculty}`);
        });
    }
}

const myUniversity = new University('PSU');
myUniversity.addFaculty('Faculty of Information Technologies');
myUniversity.addFaculty('Faculty of Gumanitary Science');
myUniversity.displayFaculties();


myUniversity.removeFaculty('Faculty of Gumanitary Science');
myUniversity.displayFaculties();
