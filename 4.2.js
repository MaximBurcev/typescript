"use strict";
function logId(id) {
    if (typeof id === 'string') {
        console.log(id.toLowerCase);
    }
    else if (typeof id === 'number') {
        console.log(id);
    }
    else {
        console.log(id);
    }
}
logId(1);
logId("sdf");
logId(true);
function logError(err) {
    if (Array.isArray(err)) {
        console.log(err);
    }
    else {
        console.log(err);
    }
}
function logObject(obj) {
    if ('a' in obj) {
        console.log(obj.a);
    }
    else {
        console.log(obj.b);
    }
}
function logMultipleIds(a, b) {
    if (a === b) {
        console.log(b);
    }
    else {
        console.log(a);
    }
}
const a = 1;
