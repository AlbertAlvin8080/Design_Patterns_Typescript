import { Inventory } from "../inventory/Inventory";
import { Product } from "../inventory/Product";
import { Command } from "./Command";

export class InventoryOutCommand implements Command {

    constructor(
        private _inventory: Inventory
    ) { }

    execute(): void {
        this._inventory.removeProduct(new Product("mock", 0.00));
    }
}