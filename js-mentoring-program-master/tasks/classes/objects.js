/**
 * create object person with firstName and lastName properties
 * implement method getFullName that returns full name
 */
const person = {
    firstName: "Aliaksandra",
    lastName: "Peshko",
    getFullName: function (){
        return this.firstName + ' '+ this.lastName;
    }

}//put you object here

/**
 * create object student that has property grade and method getGrade
 * set person as prototype of student
 */
const student = Object.create(person);
student.grade = "11";
student.getGrade = function() {
    return this.grade;
}
const student2 = Object.create(student);
   //put you object here

/**
 * create new instance of student using Object.create
 */
//const student2 = //put you object here
module.exports = {
    person,
    student,
    student2
};
