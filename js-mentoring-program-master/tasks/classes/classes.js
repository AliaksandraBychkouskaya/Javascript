/**
 * implement class Person with:
 * 1) properties firstName and lastNameuiiiiiiiiiiiiiiimp-=[]
 * 2) constructor that pass firstName and lastName to the object
 * 3) method getFullName
 */
//put your code here
class Person{
    constructor (firstName,lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }
     getFullName(){
        return this.firstName + ' ' + this.lastName;
    }
}

/**
 * implement class Student that extends Person with:
 * 1) property grade
 * 2) constructor that pass grade to the object
 * 3) method getGrade that returns property grade

 */
//put your code here
class Student extends Person{
    constructor (person,grade){
        super(person);
        this.grade = grade;
    }
    getGrade (){
        return this.grade;
    }
}
 //create instance of class person
//const student = //create instance of class student
let person = new Person("Artsiom", "Peshko");
let student = new Student ("Fori","Glupova", "11");

module.exports = {
    person,
    student
};
