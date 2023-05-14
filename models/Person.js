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
    totalScore = function(){
        let totalScore = Number(this.math) + Number(this.physic) + Number(this.chemistry);
        return totalScore/3;
    }
}

export class Employee extends Person {
    countDay = 0;
    salary = 0;
    totalSalary = function(){
        return Number(this.countDay)*Number(this.salary);
    }

}

export class Customer extends Person {
    companyName = '';
    invoiceValue = 0;
    evaluate = ''

}



