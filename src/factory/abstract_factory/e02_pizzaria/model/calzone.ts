export enum CalzoneType {
    HAM, PEPPERONI
}

export interface Calzone {
    getIngredients(): string;
    getType(): CalzoneType;
}

export class HamCalzone implements Calzone {
    getIngredients(): string {
        return `cheese, ham, tomato.`;
    }
    getType(): CalzoneType {
        return CalzoneType.HAM;
    }
}

export class PepperoniCalzone implements Calzone {
    getIngredients(): string {
        return `cheese, pepperoni, tomato.`;
    }
    getType(): CalzoneType {
        return CalzoneType.PEPPERONI;
    }
}