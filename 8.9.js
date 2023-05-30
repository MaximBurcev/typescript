"use strict";
const form = {
    name: 'Vasya',
    password: '123'
};
const formValidation = {
    name: { isValid: true },
    password: { isValid: false, errorMessage: 'Password too short' }
};
