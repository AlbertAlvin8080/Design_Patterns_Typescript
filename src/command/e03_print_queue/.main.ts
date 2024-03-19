import { Document } from './document/Document';
import { PrintDocumentCommand } from './command/PrintDocumentCommand';

const doc = new Document(["Line 1", "Line 2", "Line 3"]);
const doc2 = new Document(["Line 12", "Line 22", "Line 32"]);
const printcmd = new PrintDocumentCommand(doc, "files/document1.txt");
const printcmd2 = new PrintDocumentCommand(doc2, "files/document2.txt");

printcmd.execute();