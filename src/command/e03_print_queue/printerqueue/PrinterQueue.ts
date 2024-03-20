import { Command } from "../command/Command";
import { Printer } from "../printer/Printer";

export class PrinterQueue {
    constructor(
        private commands: Command[]
    ) {}

    public processQueue(printer: Printer) {
        this.commands.forEach(c => c.execute(printer));
    }
}