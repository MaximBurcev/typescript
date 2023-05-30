class Resp<D, E> {
    data?: D;
    error?: E;

    constructor(data?: D, error?: E) {

        this.data = data;
        this.error = error;
    }
}

const res4 = new Resp<string, number>('data');
res4.error

class HTTPResp<F> extends Resp<string, number> {
    code: F;
    setCode(code: F) {
        this.code = code;
    }
}

const res5 = new HTTPResp();