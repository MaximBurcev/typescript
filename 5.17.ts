abstract class Logger2 {
    abstract log(message: string): void

    printDate(date: Date) {
        this.log(date.toString());
    }
}

class MyLogger extends Logger2 {
    log(message: string): void {
        console.log(message);
    }

    logWithDate(message: string) {
        this.printDate(new Date());
        this.log(message);
    }
}

const myLogger = new MyLogger();
myLogger.logWithDate('My message')