import * as fs from 'fs';

export interface Logger {
    log(message: string): void;
}

export class ConsoleLogger implements Logger {
    log(message: string): void {
        console.log(message);
    }
}

export class FileLogger implements Logger {
    log(message: string): void {
        const filePath = "files/log.txt";
        const fd = fs.openSync(filePath, 'a');
        fs.writeSync(fd, message);
        fs.closeSync(fd);
    }
}