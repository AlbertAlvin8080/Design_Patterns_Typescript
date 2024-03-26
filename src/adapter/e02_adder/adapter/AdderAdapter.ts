import { SetAdder } from "../adder/SetAdder";
import { ArrayAdder } from "../adder/ArrayAdder";

export class AdderAdapter implements ArrayAdder {

    constructor(private setAdder: SetAdder) { }

    sumArray(array: number[]): number {
        return this.setAdder.sumSet(new Set(array));
    }

}