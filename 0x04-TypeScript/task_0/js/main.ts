interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

var student1: Student = {
    firstName: 'Sarah',
    location: 'Tulsa',
}

var student2: Student = {
    firstName: 'Buzz',
    location: 'Berryhill',
}

let studentList = [student1, student2];

console.log(studentList);

