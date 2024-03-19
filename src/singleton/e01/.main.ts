import { log } from 'console';
import { Incremental, IncrementalV2, IncrementalV3 } from './Incremental';

/* Incremental */
// new Incremental();
// new Incremental();
// const inc = new Incremental();

// log();
// log(inc.toString());

/* IncrementalV2 */
// IncrementalV2.getInstance();
// IncrementalV2.getInstance();
// const incv2 = IncrementalV2.getInstance();

// log();
// log(incv2.toString());

/* IncrementalV3 */
IncrementalV3.getInstance();
IncrementalV3.getInstance();
const incv3 = IncrementalV3.getInstance();

log();
log(incv3.toString());
