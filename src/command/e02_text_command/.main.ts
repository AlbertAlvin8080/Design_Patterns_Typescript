import { Document } from './document/Document';
import { InsertTextCommand } from './command/InsertTextCommand';
import { RemoveTextCommand } from './command/RemoveTextCommand';
import { Invoker } from './invoker/Invoker';
import { log } from 'console';

const doc = new Document();
const inerstC = new InsertTextCommand(doc);
const removeC = new RemoveTextCommand(doc);

const invoker = new Invoker([inerstC], [removeC]);
invoker.executeInsertCommand(0, "Linha 1");
invoker.executeInsertCommand(0, "Linha 2");
invoker.executeRemoveCommand(0, 0);

log();
log(doc);