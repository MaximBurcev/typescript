"use strict";
const user2 = {
    login: 'maxim.b@intensa.ru',
    password: '1'
};
function multiply(first, second = 5) {
    if (!second) {
        return first * first;
    }
    return first * second;
}
multiply(5, 2);
multiply(6);
function testPass(user) {
    var _a;
    const t = (_a = user.password) === null || _a === void 0 ? void 0 : _a.type;
}
function test2(param) {
    const t = param !== null && param !== void 0 ? param : multiply(5);
}
