import { log } from 'console';
import { Inventory } from './inventory/Inventory';
import { InventoryInCommand } from './command/InventoryInCommand';
import { InventoryOutCommand } from './command/InventoryOutCommand';
import { Invoker } from './invoker/Invoker';

// const product = new Product("RTX 9080", 10_000);
// log(product);

const inventory = new Inventory();
const inventoryInCommand = new InventoryInCommand(inventory);
const inventoryOutCommand = new InventoryOutCommand(inventory);

const invoker = new Invoker([inventoryInCommand], [inventoryOutCommand]);
log();
log(inventory);
invoker.executeInCommand(0);
log(inventory);
invoker.executeOutCommand(0);
log(inventory);