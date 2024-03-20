import { Document } from './document/Document';
import { InsertTextCommand } from './command/InsertTextCommand';
import { RemoveTextCommand } from './command/RemoveTextCommand';
import { Invoker } from './invoker/Invoker';
import { log } from 'console';

const doc = new Document();
const inerstC = new InsertTextCommand(doc);
const removeC = new RemoveTextCommand(doc);

log();
const invoker = new Invoker([inerstC], [removeC]);
invoker.executeInsertCommand(0, "Linha 1");
log(doc);
invoker.executeInsertCommand(0, "Linha 2");
log(doc);
invoker.executeRemoveCommand(0, 0);
log(doc);
invoker.executeInsertCommand(0, "Linha 3");
log(doc);
invoker.undo("remove");
log(doc);
invoker.undo("insert");
invoker.undo("insert");
invoker.undo("insert");
log(doc);
