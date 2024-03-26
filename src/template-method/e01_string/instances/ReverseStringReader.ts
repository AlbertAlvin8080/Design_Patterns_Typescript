import { ConsoleStringReader } from "../template/ConsoleStringReader";

export class ReverseStringReader extends ConsoleStringReader {

    protected transform(): string {
        let reverse = "";
        const str = this.str!;

        for(let i = str.length-1; i > -1; --i) {
            reverse += str[i];
        }

        return reverse;
    }

}