import { log } from 'console';
import { ConsolePrinterFactory, FilePrinterFactory } from './factoryContracts';

function main(message: string) {
    const filePF = new FilePrinterFactory();
    const consolePF = new ConsolePrinterFactory();

    const random = Math.random();
    const n = Math.floor(random * 2);
    // log(random, random * 2, n);

    if(n === 0)
        consolePF.getPrinter().print(message);
    else if(n === 1)
        filePF.getPrinter().print(message);
}

log();
main("Hello, World!\n");