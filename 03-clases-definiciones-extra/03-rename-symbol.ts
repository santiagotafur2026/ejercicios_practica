import { Student } from './extra/classes';

//* 
//*     Objetivo:
//*         Renombrar el símbolo 'Student' a 'Alumno'
//*         IMPORTANTE: Solo cambiar la clase, NO los strings
//* 
//*     Tips:
//*         Rename Symbol: F2
//*         Colocar cursor sobre 'Student' y presionar F2
//*         Esto cambiará todas las referencias en todos los archivos
//* 
//*     Tarea:
//*         1. Colocar cursor sobre 'Student' en la línea 1
//*         2. Presionar F2
//*         3. Escribir 'Alumno'
//*         4. Presionar Enter
//*         5. Verificar que cambió en todas las líneas pero NO en los strings
//*


const juan = new Student();
juan.firstName = 'Juan';
juan.lastName = 'Pérez';
juan.age = 20;

const maria = new Student();
maria.firstName = 'María';
maria.lastName = 'García';
maria.age = 19;

const carlos = new Student();
carlos.firstName = 'Carlos';
carlos.lastName = 'Rodríguez';
carlos.age = 21;

function enrollStudent(student: Student, course: string) {
    console.log(`Enrolling ${student.firstName} in ${course}`);
}

function gradeStudent(student: Student, grade: number) {
    console.log(`${student.firstName} received grade: ${grade}`);
}

function getStudentInfo(student: Student) {
    return `Student: ${student.firstName} ${student.lastName}, Age: ${student.age}`;
}

// Esta función tiene "Student" en el string, NO debe cambiar
function printWelcomeMessage() {
    return 'Welcome to the Student Management System!';
}

// Este comentario menciona Student y NO debe cambiar
// El Student Portal está disponible en student.universidad.com

const students: Student[] = [juan, maria, carlos];

students.forEach(student => {
    console.log(getStudentInfo(student));
});

enrollStudent(juan, 'Mathematics');
gradeStudent(maria, 95);

console.log(printWelcomeMessage());
