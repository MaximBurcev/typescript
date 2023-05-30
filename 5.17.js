"use strict";
class Logger2 {
    printDate(date) {
        this.log(date.toString());
    }
}
class MyLogger extends Logger2 {
    log(message) {
        console.log(message);
    }
    logWithDate(message) {
        this.printDate(new Date());
        this.log(message);
    }
}
const logger = new MyLogger();
logger.logWithDate('My message');
