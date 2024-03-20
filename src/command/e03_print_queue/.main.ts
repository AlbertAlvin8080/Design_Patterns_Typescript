import { Printer } from './printer/Printer';
import { Document } from './document/Document';
import { PrintDocumentCommand } from './command/PrintDocumentCommand';
import { PrinterQueue } from './printerqueue/PrinterQueue';

const doc = new Document(["Line 1", "Line 2", "Line 3"], "files/document1.txt");
const doc2 = new Document(["Line 12", "Line 22", "Line 32"], "files/document2.txt");
const printcmd = new PrintDocumentCommand(doc);
const printcmd2 = new PrintDocumentCommand(doc2);

const queue = new PrinterQueue([printcmd, printcmd2]);
queue.processQueue(new Printer());