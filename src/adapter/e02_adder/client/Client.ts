import { log } from 'console';
import { ArrayAdder } from '../adder/ArrayAdder';

export class Client {

    constructor(
        private adder: ArrayAdder
    ) { }

    public execute(): void {
        let array: number[] = [ 1, 2, 2, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];
        let sum: number = this.adder.sumArray(array);
        log(" Result : " + sum);
    }
}