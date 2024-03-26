import { Comparator } from "../template/Comparator";

export class DecimalComparator implements Comparator<number> {

    compare(o1: number, o2: number): number {
        let decimal1 = (o1 - Math.floor(o1)) * 1000;
        let decimal2 = (o2 - Math.floor(o2)) * 1000;
        return decimal1 - decimal2;
    }
    
}