"use strict";
// const a = 1; 
let revenue = 500;
let bonus = 500;
// let res:number = revenue + bonus;
//console.log(res);
// function getFullName(firstname: string, surname: string): string {
//     return `${firstname} ${surname}`
// }
//console.log(getFullName("Max", "Burcev"));
function getFullName(userEntity) {
    return `${userEntity.firstname} ${userEntity.surname}`;
}
const user = {
    firstname: 'Max',
    surname: 'Burcev',
    city: 'Tula',
    age: 34
};
getFullName(user);
const skills = ['Dev', 'DevOps', 'Testing'];
//skills.push();
for (const skill of skills) {
    console.log(skill.toLowerCase());
}
const res = skills
    .filter((s) => s !== 'DevOps')
    .map(s => s + '! ')
    .reduce((a, b) => a + b);
console.log(res);
const skill = [1, 'Dev'];
//const id = skill[0];
//const skillName = skill[1];
//const q = skill[2];
// skill.push('asdf');
// skill.pop();
const [id, skillName] = skill;
const arr = [1, 'sdf', true, true, false];
// skill[0] = 2;
var StatusCode;
(function (StatusCode) {
    StatusCode[StatusCode["SUCCESS"] = 1] = "SUCCESS";
    StatusCode[StatusCode["IN_PROCESS"] = 3] = "IN_PROCESS";
    StatusCode[StatusCode["FAILED"] = 10] = "FAILED";
    StatusCode["PAID"] = "p";
})(StatusCode || (StatusCode = {}));
const result = {
    message: 'Success',
    statusCode: StatusCode.SUCCESS
};
if (result.statusCode === StatusCode.SUCCESS) {
}
function action(status) {
}
action(StatusCode.SUCCESS);
action(1);
function compute() {
    return 3;
}
function test(x) {
}
//test(Roles);
const res2 = 0 /* Roles.ADMIN */;
