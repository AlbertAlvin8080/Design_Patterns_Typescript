import { Document } from '../document/Document';
import { Command } from './Command';

export class RemoveTextCommand implements Command {

    constructor(private document: Document) {}

    public execute(idx: number): void {
        this.document.removeLine(idx);
    }
}