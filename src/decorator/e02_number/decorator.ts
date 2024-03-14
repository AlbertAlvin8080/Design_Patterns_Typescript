import { PrinterDecorator } from "./contracts";

export class BracesPrinterDecorator extends PrinterDecorator {
    print(): string {
        return `{${this.printer.print()}}`;
    }
}

export class ParenthesisPrinterDecorator extends PrinterDecorator {
    print(): string {
        return `(${this.printer.print()})`;
    }
}

export class SquareBracketsPrinterDecorator extends PrinterDecorator {
    print(): string {
        return `[${this.printer.print()}]`;
    }
}

export class CurlyBracketsPrinterDecorator extends PrinterDecorator {
    print(): string {
        return `<${this.printer.print()}>`;
    }
}