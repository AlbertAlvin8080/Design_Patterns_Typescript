import { Document } from "../document/Document";
import { Command } from "./Command";
import * as fs from 'fs';

export class PrintDocumentCommand implements Command {

    constructor(
        private document: Document,
        private path: string
    ) {}

    execute(): void {
        const lines = this.document.getLines();

        // warning: the final path will be in relation to the entry point of the program.
        const fd = fs.openSync(this.path, "a");
        fs.writeFileSync(fd, lines);
        fs.closeSync(fd);
    }
}