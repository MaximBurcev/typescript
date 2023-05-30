interface UserInterface  {
    name: string,
    age: number,
    skills: number[],
    log: (id: number) => string
}

interface RoleInterface  {
    id: number
}

interface UserWithRole2 extends UserInterface, RoleInterface {
    createdAt: Date
}


let user5: UserWithRole2 = {
    name: 'Max',
    age: 34, 
    skills: [1, 2],
    id: 5, 
    createdAt: new Date(),
    log(id) {
        return '';
    }
}

interface UserDic {
    [index: number]: UserInterface
}

type UserDict = {
    [index: number]: UserInterface
}