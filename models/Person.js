export class Person {
    id = '';
    name = '';
    address = '';
    email = '';
    typeOption = ''

}

export class Student extends Person {
    math = 0;
    physic  = 0;
    chemistry = 0;
    totalScore(){
        return ((this.math + this.physic + this.chemistry)/3).toLocaleString();
    }
}

export class Employee extends Person {
    countDay = 0;
    salary = 0

}

export class Customer extends Person {
    companyName = '';
    invoiceValue = 0;
    evaluate = ''

}