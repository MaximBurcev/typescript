// const a = 1; 

let revenue: number = 500;
let bonus: number = 500;

// let res:number = revenue + bonus;
//console.log(res);

// function getFullName(firstname: string, surname: string): string {
//     return `${firstname} ${surname}`
// }

//console.log(getFullName("Max", "Burcev"));

function getFullName(userEntity: {firstname: string, surname: string}): string {
    return `${userEntity.firstname} ${userEntity.surname}`
}

const user = {
    firstname: 'Max',
    surname: 'Burcev',
    city: 'Tula',
    age: 34
}


getFullName(user);

const skills: readonly string[] = ['Dev', 'DevOps', 'Testing'];

//skills.push();


for(const skill of skills) {
    console.log(skill.toLowerCase());
}

const res = skills
    .filter((s:string) => s !== 'DevOps')
    .map(s => s + '! ')
    .reduce((a, b) => a + b)

console.log(res);

const skill: readonly [number, string] = [1, 'Dev'];

//const id = skill[0];
//const skillName = skill[1];
//const q = skill[2];
// skill.push('asdf');
// skill.pop();

const [id, skillName] = skill;

const arr: [number, string, ...boolean[]] = [1, 'sdf', true, true, false]

// skill[0] = 2;

enum StatusCode {
    SUCCESS = 1,
    IN_PROCESS = 3,
    FAILED = 10,
    PAID = 'p'
}

const result = {
    message: 'Success',
    statusCode: StatusCode.SUCCESS
}

if (result.statusCode === StatusCode.SUCCESS) {

}

function action(status: StatusCode){

}

action(StatusCode.SUCCESS);
action(1);
//action('p');

const enum Roles {
    ADMIN,
    USER = ADMIN * 2,
}

function compute() {
    return 3;
}

function test(x: {ADMIN: number}) {

}

//test(Roles);


const res2 = Roles.ADMIN;
