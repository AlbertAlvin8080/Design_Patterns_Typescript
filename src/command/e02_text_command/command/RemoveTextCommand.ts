import { text } from 'stream/consumers';
import { Document } from '../document/Document';
import { Command } from './Command';

export class RemoveTextCommand implements Command {
    private lastText: string = "";

    constructor(private document: Document) { }

    public execute(idx: number): void {
        this.lastText = this.document.removeLine(idx);
    }

    undo(): void {
        if (this.lastText.length > 0)
            this.document.addLine(this.lastText);
        this.lastText = "";
    }
}