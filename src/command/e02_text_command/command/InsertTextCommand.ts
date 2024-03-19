import { Document } from '../document/Document';
import { Command } from './Command';

export class InsertTextCommand implements Command {

    constructor(readonly document: Document) {}

    public execute(text: string): void {
        this.document.addLine(text);
    }
}