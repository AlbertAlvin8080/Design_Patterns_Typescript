import * as fs from 'fs';
export interface Printer {
    print(message: string): void;
}

export class ConsolePrinter implements Printer {
    print(message: string): void {
        console.log(message);
    }
}

export class FilePrinter implements Printer {
    print(message: string): void {
        const filePath = "files/helloWorld.txt";
        const fd = fs.openSync(filePath, "a");
        fs.writeSync(fd, message);
        fs.closeSync(fd);
    }
}