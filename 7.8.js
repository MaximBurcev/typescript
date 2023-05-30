"use strict";
class Resp {
    constructor(data, error) {
        this.data = data;
        this.error = error;
    }
}
const res4 = new Resp('data');
res4.error;
class HTTPResp extends Resp {
    setCode(code) {
        this.code = code;
    }
}
const res5 = new HTTPResp();
