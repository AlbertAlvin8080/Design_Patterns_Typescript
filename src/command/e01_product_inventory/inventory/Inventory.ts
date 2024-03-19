import { log } from "console";
import { Product } from "./Product";

export class Inventory {
    private _products: Product[];

    constructor(products: Product[] = []) {
        this._products = products;
    }

    public addProduct(product: Product) {
        this._products.push(product);
        log(`Added product: name=${product.name} | price=${product.price}`);
    }

    public removeProduct(product: Product) {
        this._products =
            this._products.filter(p => {
                return p.name !== product.name;
            });
        log(`Removed product: name=${product.name} | price=${product.price}`);
        return product;
    }
}