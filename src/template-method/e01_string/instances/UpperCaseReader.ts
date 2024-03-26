import { ConsoleStringReader } from "../template/ConsoleStringReader";

export class UpperCaseReader extends ConsoleStringReader {

    protected transform(): string {
        return this.str!.toUpperCase();
    }
    
}