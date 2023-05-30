
type httpMethod = 'post' | 'get';

type coolString = string;

function fetchWithAuth3(url: coolString, method: httpMethod): 1 | -1 {
    return 1;
}

// type User = {
//     name: string,
//     age: number,
//     skills: number[]
// }

type Role = {
    id: number
}

type UserWithRole = User & Role;

// let user4: UserWithRole = {
//     name: 'Max',
//     age: 34, 
//     skills: [1, 2],
//     id: 5
// }