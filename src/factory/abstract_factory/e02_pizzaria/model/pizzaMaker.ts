import { Calzone, CalzoneType, HamCalzone, PepperoniCalzone } from "./calzone";
import { PepperoniPizza, Pizza, HamPizza, PizzaType } from './pizza';

export interface PizzaMaker {
    getPizza(pizzaType: PizzaType): Pizza;
    getCalzone(calzoneType: CalzoneType): Calzone;
}

export class EvenWeekDaysPizzaMaker implements PizzaMaker {
    getPizza(pizzaType: PizzaType): Pizza {
        if (pizzaType === PizzaType.PEPPERONI)
            return new PepperoniPizza();
        else
            throw new Error("Invalid pizza type");
    }
    getCalzone(calzoneType: CalzoneType): Calzone {
        if (calzoneType === CalzoneType.PEPPERONI)
            return new PepperoniCalzone();
        else
            throw new Error("Invalid calzone type");
    }
}

export class OddWeekDaysPizzaMaker implements PizzaMaker {
    getPizza(pizzaType: PizzaType): Pizza {
        if (pizzaType === PizzaType.HAM)
            return new HamPizza();
        else
            throw new Error("Invalid pizza type");
    }
    getCalzone(calzoneType: CalzoneType): Calzone {
        if (calzoneType === CalzoneType.HAM)
            return new HamCalzone();
        else
            throw new Error("Invalid calzone type");
    }
}
