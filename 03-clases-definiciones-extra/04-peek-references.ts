import { Employee } from './extra/classes';

//*
//*    Objetivo:
//*        Practicar Peek Definition y Find All References
//*        Entender la diferencia entre F12 y Alt+F12
//*
//*    Tips:
//*        Peek Definition: Alt + F12 (ver sin salir del archivo)
//*        Go to Definition: F12 (ir al archivo)
//*        Find All References: Shift + F12
//*        Go Back: Alt + ←
//*        Go Forward: Alt + →
//*
//*    Tareas:
//*        1. Colocar cursor en 'Employee' (línea 1) y presionar Alt+F12
//*        2. Ver la definición en una ventana flotante
//*        3. Cerrar con Esc
//*        4. Presionar Shift+F12 para ver todas las referencias
//*        5. Navegar por las referencias con las flechas
//*        6. Practicar con diferentes métodos (calculateSalary, promote)
//*

const employee1 = new Employee();
employee1.name = 'Ana Martínez';
employee1.position = 'Desarrolladora Senior';
employee1.department = 'Tecnología';
employee1.salary = 85000;

const employee2 = new Employee();
employee2.name = 'Pedro López';
employee2.position = 'Gerente de Producto';
employee2.department = 'Producto';
employee2.salary = 95000;

const employee3 = new Employee();
employee3.name = 'Laura Fernández';
employee3.position = 'Diseñadora UX';
employee3.department = 'Diseño';
employee3.salary = 70000;

const employee4 = new Employee();
employee4.name = 'Roberto Sánchez';
employee4.position = 'Analista de Datos';
employee4.department = 'Analytics';
employee4.salary = 75000;

function hireEmployee(emp: Employee) {
    console.log(`Contratando a ${emp.name} como ${emp.position}`);
    emp.startDate = new Date();
}

function promoteEmployee(emp: Employee, newPosition: string, salaryIncrease: number) {
    emp.position = newPosition;
    emp.salary += salaryIncrease;
    console.log(`${emp.name} ha sido promovido a ${newPosition}`);
}

function calculateBonus(emp: Employee, percentage: number): number {
    return emp.salary * (percentage / 100);
}

function transferEmployee(emp: Employee, newDepartment: string) {
    const oldDept = emp.department;
    emp.department = newDepartment;
    console.log(`${emp.name} transferido de ${oldDept} a ${newDepartment}`);
}

function getEmployeesByDepartment(employees: Employee[], dept: string): Employee[] {
    return employees.filter(emp => emp.department === dept);
}

function getTotalPayroll(employees: Employee[]): number {
    return employees.reduce((total, emp) => total + emp.salary, 0);
}

const allEmployees: Employee[] = [employee1, employee2, employee3, employee4];

// Contratar empleados
allEmployees.forEach(hireEmployee);

// Promover a Ana
promoteEmployee(employee1, 'Tech Lead', 15000);

// Calcular bonos
const bonus1 = calculateBonus(employee1, 10);
console.log(`Bono para ${employee1.name}: $${bonus1}`);

// Transferir a Laura
transferEmployee(employee3, 'Producto');

// Obtener empleados de Tecnología
const techEmployees = getEmployeesByDepartment(allEmployees, 'Tecnología');
console.log(`Empleados en Tecnología: ${techEmployees.length}`);

// Calcular nómina total
const totalPayroll = getTotalPayroll(allEmployees);
console.log(`Nómina total: $${totalPayroll}`);
