import { ConsolePrinter, FilePrinter, Printer } from "./printer";

export interface PrinterFactory {
    getPrinter(): Printer;
}

export class ConsolePrinterFactory implements PrinterFactory {
    getPrinter(): Printer {
        return new ConsolePrinter();
    }
}

export class FilePrinterFactory implements PrinterFactory {
    getPrinter(): Printer {
        return new FilePrinter();
    }
}