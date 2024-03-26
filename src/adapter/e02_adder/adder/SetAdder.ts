export class SetAdder {

    public sumSet(dataSet: Set<number>): number {
        let sum: number = 0;
        for (const value of dataSet) {
            sum += value;
        }
        return sum;
    }

}