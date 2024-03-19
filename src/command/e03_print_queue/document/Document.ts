export class Document {
    constructor(private _text: string[] = []) { }

    public addLine(text: string): void {
        this._text.push(text);
    }

    public removeLine(idx: number): string {
        const line = this._text[idx];
        this._text = this._text.filter((line, lineIdx) => lineIdx !== idx);
        return line;
    }

    public getLines(): string {
        return this._text.reduce((acc, str) => acc + str + "\n", "");
    }
}