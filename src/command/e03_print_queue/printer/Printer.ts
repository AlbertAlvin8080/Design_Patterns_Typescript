import * as fs from 'fs';
import { Document } from '../document/Document';

export class Printer {

    print(doc: Document) {
        // warning: the final path will be in relation to the entry point of the program.
        const fd = fs.openSync(doc.getPath(), "a");
        fs.writeFileSync(fd, doc.getLines());
        fs.closeSync(fd);
    }
}