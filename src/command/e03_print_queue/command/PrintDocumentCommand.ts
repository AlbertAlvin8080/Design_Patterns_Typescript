import { Document } from "../document/Document";
import { Printer } from "../printer/Printer";
import { Command } from "./Command";

export class PrintDocumentCommand implements Command {

    constructor(
        private document: Document
    ) {}

    execute(printer: Printer): void {
        printer.print(this.document);
    }
}