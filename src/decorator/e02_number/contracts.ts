export interface Printer {
    print() : string;
}

export abstract class PrinterDecorator implements Printer {
    protected printer: Printer;

    constructor(printer: Printer) {
        this.printer = printer;
    }

    abstract print(): string;
}