export enum PizzaType {
    HAM, PEPPERONI
}

export interface Pizza {
    getIngredients(): string;
    getType(): PizzaType
}

export class HamPizza implements Pizza {
    getIngredients(): string {
        return `cheese, ham, tomato.`;
    }
    getType(): PizzaType {
        return PizzaType.HAM;
    }
}

export class PepperoniPizza implements Pizza {
    getIngredients(): string {
        return `cheese, pepperoni, tomato.`;
    }
    getType(): PizzaType {
        return PizzaType.PEPPERONI;
    }
}