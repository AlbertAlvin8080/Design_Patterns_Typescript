import { Comparator } from './template/Comparator';
import { DecimalComparator } from './instances/DecimalComparator';
import { log } from 'console';

let comparator: Comparator<number> = new DecimalComparator();
const c1 = comparator.compare(100.132, 82.34);
const c2 = comparator.compare(2.945, 222.12);
const c3 = comparator.compare(100.132, 100.132);

log();
log(lowerEqualsBigger(c1));
log(lowerEqualsBigger(c2));
log(lowerEqualsBigger(c3));

function lowerEqualsBigger(comparison: number) {
    return comparison < 0 ? "first is lower" : (comparison == 0 ? "equals" : "second is lower")
}