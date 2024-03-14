import { Printer } from "./contracts";

export class NumberPrinter implements Printer {
    print(): string {
        return "1";
    }
}