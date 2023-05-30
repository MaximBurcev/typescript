interface User2 {
    login: string;
    password: string;
}

const user2: User2 = {
    login: 'maxim.b@intensa.ru',
    password: '1'
}

function multiply(first: number, second: number = 5): number {
    if(!second) {
        return first*first;
    }
    return first*second;
}

multiply(5, 2);
multiply(6);

interface UserPro {
    login: string;
    password?: {
        type: 'primary' | 'secondary'
    };
}

function testPass(user: UserPro) {
    const t = user.password?.type;
}

function test2(param?: string) {
    const t = param?? multiply(5);
}