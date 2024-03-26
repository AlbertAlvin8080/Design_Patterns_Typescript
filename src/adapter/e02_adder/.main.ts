import { log } from "console";
import { SetAdder } from './adder/SetAdder';
import { Client } from './client/Client';
import { AdderAdapter } from './adapter/AdderAdapter';

const actualAdder = new SetAdder();
const adapter = new AdderAdapter(actualAdder);

const client = new Client(adapter);

log();
client.execute();
