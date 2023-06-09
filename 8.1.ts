interface IUser3 {
    name: string; 
    age: number;
}

type KeysOfUser = keyof IUser3;

const key: KeysOfUser = 'age';

function getValue<T, K extends keyof T>(obj: T, key: K){
    return obj[key];
}

const user4: IUser3 = {
    name: 'Vasya',
    age: 30
}

const userName = getValue(user, 'name');