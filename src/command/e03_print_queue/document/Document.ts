export class Document {
    constructor(
        private _content: string[] = [], 
        private _path: string
    ) { }

    public getPath() {
        return this._path;
    }

    public addLine(content: string): void {
        this._content.push(content);
    }

    public removeLine(idx: number): string {
        const line = this._content[idx];
        this._content = this._content.filter((line, lineIdx) => lineIdx !== idx);
        return line;
    }

    public getLines(): string {
        return this._content.reduce((acc, str) => acc + str + "\n", "");
    }
}