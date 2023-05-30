interface IForm {
    name: string;
    password: string;
}

const form: IForm = {
    name: 'Vasya',
    password: '123'
}

const formValidation: Validation<IForm> = {
    name: {isValid: true},
    password: {isValid: false, errorMessage: 'Password too short'}
}

type Validation<T> = {
    [K in keyof T]: {
        isValid: true
    } | {
        isValid: false;
        errorMessage: string;
    }
}