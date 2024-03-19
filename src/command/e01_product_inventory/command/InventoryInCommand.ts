import { Inventory } from "../inventory/Inventory";
import { Product } from "../inventory/Product";
import { Command } from "./Command";

export class InventoryInCommand implements Command {

    constructor(
        private _inventory: Inventory
    ) { }

    execute(): void {
        this._inventory.addProduct(new Product("mock", 0.00));
    }
}