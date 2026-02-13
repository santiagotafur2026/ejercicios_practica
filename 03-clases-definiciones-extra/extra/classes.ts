
export class Product {

    name: string = '';
    price: number = 0;
    category: string = '';
    brand: string = '';
    stock: number = 0;
    sku: string = '';
    
    private _discount: number = 0;

    constructor() { }

    get discount() {
        return this._discount;
    }

    set discount(value: number) {
        if (value >= 0 && value <= 100) {
            this._discount = value;
        }
    }

    applyDiscount(percentage: number) {
        this.price = this.price * (1 - percentage / 100);
    }

    increaseStock(quantity: number) {
        this.stock += quantity;
    }

    decreaseStock(quantity: number) {
        if (this.stock >= quantity) {
            this.stock -= quantity;
        }
    }

    isInStock(): boolean {
        return this.stock > 0;
    }

    getFinalPrice(): number {
        return this.price * (1 - this._discount / 100);
    }
}


export class Student {

    firstName: string = '';
    lastName: string = '';
    age: number = 0;
    email: string = '';
    studentId: string = '';
    enrollmentDate: Date = new Date();
    
    private _gpa: number = 0;
    private _credits: number = 0;

    constructor() { }

    get gpa() {
        return this._gpa;
    }

    set gpa(value: number) {
        if (value >= 0 && value <= 4.0) {
            this._gpa = value;
        }
    }

    get credits() {
        return this._credits;
    }

    enroll(course: string, credits: number) {
        this._credits += credits;
        console.log(`Enrolled in ${course}`);
    }

    calculateGPA(grades: number[]): number {
        const sum = grades.reduce((a, b) => a + b, 0);
        this._gpa = sum / grades.length;
        return this._gpa;
    }

    getFullName(): string {
        return `${this.firstName} ${this.lastName}`;
    }

    isFullTime(): boolean {
        return this._credits >= 12;
    }
}


export class Employee {

    name: string = '';
    position: string = '';
    department: string = '';
    salary: number = 0;
    email: string = '';
    phone: string = '';
    startDate: Date = new Date();
    
    private _employeeId: string = '';
    private _vacationDays: number = 20;

    constructor() { }

    get employeeId() {
        return this._employeeId;
    }

    set employeeId(value: string) {
        this._employeeId = value;
    }

    get vacationDays() {
        return this._vacationDays;
    }

    calculateSalary(months: number): number {
        return this.salary * months;
    }

    promote(newPosition: string, salaryIncrease: number) {
        this.position = newPosition;
        this.salary += salaryIncrease;
    }

    requestVacation(days: number): boolean {
        if (this._vacationDays >= days) {
            this._vacationDays -= days;
            return true;
        }
        return false;
    }

    getYearsOfService(): number {
        const now = new Date();
        const diff = now.getTime() - this.startDate.getTime();
        return Math.floor(diff / (1000 * 60 * 60 * 24 * 365));
    }

    transfer(newDepartment: string) {
        this.department = newDepartment;
    }
}
