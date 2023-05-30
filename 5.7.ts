interface ILogger {
    log(...args: any[]): void;
    erro(...args: any[]): void;
}

class Logger implements ILogger {
    log(...args: any[]): void {
        throw new Error("Method not implemented.");
    }
    erro(...args: any[]): void {
        throw new Error("Method not implemented.");
    }
    
}

interface IPayable {
    pay(paymentId: number):void;
    price?: number;
}

interface IDeletable {
    delete(): void;
}

class User4 implements IPayable, IDeletable {
    delete(): void {
        throw new Error("Method not implemented.");
    }
    pay(paymentId: number | string): void {
        throw new Error("Method not implemented.");
    }
    price?: number | undefined;

}